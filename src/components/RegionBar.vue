<template>
  <div :class="isVisited ? ' visited' : isAccordionOpen ? 'header active' : 'header'" ref="header" @click="toggleAccordion">
    <p>
      {{name}}
    </p> 
    <p v-if="isVisited">
      {{countries.length + "/218"}}
    </p> 
  </div>
  <div class="countries" :class="isAccordionOpen ? '' : 'hidden'">
    <CountryItem v-for="country in countries" :key="country.id" :name="country.name" :id="country.id" /> 
  </div>
</template>

<script>
import CountryItem from '@/components/CountryItem.vue'
import MS from '@/store/index'

export default {
  name: 'RegionBar',
  components: {
      CountryItem
  },
  props: {
      name: String,
      isVisited: Boolean
  },
  data() {
    const isOpen = this.$props.isVisited ? true : false
    return {
      isAccordionOpen: isOpen
    }
  },
  computed: {
      countries: function () {
          return this.$props.isVisited ? MS.getVisitedCountries(this.$props.name) : MS.getCountriesByRegion(this.$props.name)
          }
  },
  methods: {
    toggleAccordion() {
      if (!this.$props.isVisited) {
        this.isAccordionOpen = !this.isAccordionOpen
      }
    }
  }
}
</script>

<style scoped>
.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #CDD7E2;
  padding: 0 1em;
  box-sizing: border-box;
  cursor: pointer;
}

.header:hover {
  background-color: #bac2cb;
}

.header:after {
  content: '\02795';
  display: flex;
  align-items: center;
  float: right;
  margin-left: 5px;
}

.header.active:after {
  content: "\2796";
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

.countries {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px 0;
  margin: 1em 0;
}

.countries::after {
  gap: 0px 0px;
  content: "";
  min-width: 30%;
}

.hidden {
  display: none;
}
</style>
