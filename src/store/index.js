import { reactive } from "vue";
import axios from "axios";
import { COUNTRIES, ENDPOINT } from "../constants";

const MS = reactive({
  countriesVisited: localStorage.getItem("mv")
    ? JSON.parse(localStorage.getItem("mv"))
    : [],
  regions: [...new Set(COUNTRIES.map((d) => d.region))].sort(),
  popedOverCountry: null,
  countryData: null,
  addVisited(id) {
    if (this.countriesVisited.indexOf(id) < 0) {
      this.countriesVisited.push(id);
      localStorage.setItem("mv", JSON.stringify(this.countriesVisited));
    }
    const currentCountry = document.getElementById(id);
    if (currentCountry.classList.value === "map-group") {
      for (let i = 0; i < currentCountry.children.length; i++) {
        currentCountry.children[i].classList.add("active");
      }
    } else {
      currentCountry.classList.add("active");
    }
  },
  removeVisited(id) {
    const countryIndex = this.countriesVisited.indexOf(id);
    if (countryIndex > -1) {
      this.countriesVisited.splice(countryIndex, 1);
      localStorage.setItem("mv", JSON.stringify(this.countriesVisited));
    }
    const currentCountry = document.getElementById(id);
    if (currentCountry.classList.value === "map-group") {
      for (let i = 0; i < currentCountry.children.length; i++) {
        currentCountry.children[i].classList.remove("active");
      }
    } else {
      currentCountry.classList.remove("active");
    }
  },
  getCountriesByRegion(region) {
    return COUNTRIES.filter((country) => country.region === region).sort(
      (f, s) => f.name < s.name
    );
  },
  getVisitedCountries() {
    return COUNTRIES.filter((country) =>
      this.countriesVisited.includes(country.id)
    ).sort((f, s) => f.name < s.name);
  },
  setPopOverCountry(id) {
    this.popedOverCountry = id;
    this.getCountryData(id);
  },
  getCountryData(id) {
    if (id) {
      axios({
        method: "get",
        url: ENDPOINT + id,
      }).then((res) => {
        this.countryData = res.data[0];
        console.log("this.countryData:", this.countryData);
      });
    }
  },
});

export default MS;
