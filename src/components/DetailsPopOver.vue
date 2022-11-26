<template>
  <div class="popOver">
      <img :src="countryData && countryData.flags && countryData.flags.png" alt="flag"/>
      <div class="textContainer">
        <div v-if="countryData && countryData.name" class="nameContainer">
            <h3 class="commonName">{{countryData.name.common}}</h3>
            <p class="officialName">{{countryData.name.official}}</p>
        </div>
        <div v-if="countryData && countryData.name" class="populationContainer">
            <UserIcon />
            <p>{{countryData.population.toLocaleString()}}</p>
            <CityIcon />
            <p>{{countryData.capital.join(', ')}}</p>  
        </div>
      </div>
  </div>
</template>

<script>
import MS from '@/store'
import UserIcon from '@/assets/UserIcon.vue'
import CityIcon from '@/assets/CityIcon.vue'

export default {
  name: 'DetailsPopOver',
  components: {
    UserIcon,
    CityIcon
  },
  computed: {
    country: function () {
      return MS.popedOverCountry
    },
    countryData: function() {
        return MS.countryData
    }
  },
}
</script>

<style scoped>
.popOver {
    display: flex;
    justify-content: center;
    align-items: center;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.popOver img {
    height: 4em;
    box-shadow: 0 0 0.5em 0 #dedede;
    margin-right: 0.5em;
}

.popOver .textContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.5em;
    text-align: left;
    background-color: white;
    box-shadow: 0 0 0.5em 0 #dedede;
}

.popOver p, .popOver h3 {
    margin: 0;
    display: inline;
}


.nameContainer {
    display: flex;
    align-items: flex-end;
}

.commonName {
    white-space: nowrap;
}

.officialName {
    font-style: italic;
    font-size: 0.75em;
    padding: 0.21em 0.5em;
}

.populationContainer {
    height: 1em;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5em;
    white-space: nowrap;
}

@media screen and (max-width: 800px) {
    .popOver {
        height: 3em;
        display: flex;
    }
}
@media screen and (max-width: 350px) {
    .popOver {
        height: 3em;
        display: flex;
    }
}
</style>
