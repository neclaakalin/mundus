<template>
  <Header />
  <div class="mapContainer">
    <Map />
    <div v-if='isPoped' class="popOverContainer">
      <DetailsPopOver />
    </div>
  </div>
  <div class="countryListContainer">
    <div class="visited">
      <p>
         {{ "been to " + countries.length + " countries out of 218"}}
      </p> 
    </div>
    <RegionBar v-for="region in regions" :key="region" :name="region" />
  </div>
  <Footer />
</template>

<script>
import Header from '@/components/Header.vue'
import Map from '@/components/Map.vue'
import RegionBar from '@/components/RegionBar.vue'
import DetailsPopOver from '@/components/DetailsPopOver.vue'
import Footer from '@/components/Footer.vue'
import MS from '@/store'

export default {
  name: 'App',
  components: {
    Header,
    Map,
    RegionBar,
    DetailsPopOver,
    Footer
  },
  data() {
    return {
      regions: MS.regions
    }
  },
  computed: {
    countries: function () {
      return MS.getVisitedCountries()
    },
    isPoped: function () {
      return MS.popedOverCountry
    }
  }
}
</script>

<style>
body {
  margin: 0;
  background-color: #F2F2F2;
}

body *:focus {
  outline: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #464646;
  width: 100%;
  min-height: 100vh;
  
}

.mapContainer {
  width: 100%;
  position: relative;
}

.popOverContainer {
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}

.countryListContainer {
  width: 100%;
  padding: 0 3%;
  box-sizing: border-box;
}

.visited {
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  font-style: italic;
  color: #B45C5C;
  background-color: #F2F2F2;
  padding: 0 1em;
}

.icon {
    max-width: 100%;
    max-height: 100%;
    min-width: 1em;
    min-height: 1em;
    fill: #CDD7E2;
}

@media screen and (min-width: 2100px) {
  #app {
    font-size: 18px;
  }
}
@media screen and (max-width: 1400px) {
  #app {
    font-size: 14px;
  }
}
@media screen and (max-width: 800px) {
  #app {
    font-size: 12px;
  }

  .popOverContainer {
    box-sizing: border-box;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1em;
  }
}
@media screen and (max-width: 350px) {
  #app {
    font-size: 10px;
  }

  .popOverContainer {
    box-sizing: border-box;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1em;
  }
}
</style>

// add search
// add local storage
// show visited numbers per continent
// show the clock
// show more tab, to give more information on the country