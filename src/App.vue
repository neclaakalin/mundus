<template>
  <Header />
  <div class="mapContainer">
    <Map />
  </div>
  <div class="countryListContainer">
    <RegionBar name="i have been to..." :isVisited="true" />
    <RegionBar v-for="region in regions" :key="region" :name="region" />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Map from '@/components/Map.vue'
import RegionBar from '@/components/RegionBar.vue'
import MS from '@/store/index'

export default {
  name: 'App',
  components: {
    Header,
    Map,
    RegionBar
  },
  data() {
    return {
      regions: MS.regions
    }
  }
}
</script>

<style>
body {
  margin: 0;
  background-color: #F2F2F2;
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
}
@media screen and (max-width: 350px) {
  #app {
    font-size: 10px;
  }
}

.mapContainer {
  width: 100%;
}

.countryListContainer {
  width: 100%;
  padding: 0 3%;
  box-sizing: border-box;
}
</style>
