import { reactive } from "vue";
import { COUNTRIES } from "../constants";

const MS = reactive({
  countriesVisited: localStorage.getItem("mv")
    ? JSON.parse(localStorage.getItem("mv"))
    : [],
  regions: [...new Set(COUNTRIES.map((d) => d.region))].sort(),
  addVisited(id) {
    if (this.countriesVisited.indexOf(id) < 0) {
      this.countriesVisited.push(id);
      localStorage.setItem("mv", JSON.stringify(this.countriesVisited));
    }
    console.log(id);
    document.getElementById(id).classList.add("active");
    // to do check if it is parent, i.e. map-group and add children paths if so
  },
  removeVisited(id) {
    const countryIndex = this.countriesVisited.indexOf(id);
    if (countryIndex > -1) {
      this.countriesVisited.splice(countryIndex, 1);
      localStorage.setItem("mv", JSON.stringify(this.countriesVisited));
    }
    document.getElementById(id).classList.remove("active");
    // to do check if it is parent, i.e. map-group and remove from children paths if so
  },
  getCountriesByRegion(region) {
    return COUNTRIES.filter(
      (country) =>
        country.region === region &&
        this.countriesVisited.indexOf(country.id) < 0
    ).sort((f, s) => f.name < s.name);
  },
  getVisitedCountries() {
    return COUNTRIES.filter((country) =>
      this.countriesVisited.includes(country.id)
    ).sort((f, s) => f.name < s.name);
  },
});

export default MS;
