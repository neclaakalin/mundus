<template>
  <div :class="isAccordionOpen ? 'header active' : 'header'" ref="header" @click="toggleAccordion">
    <p>
      {{name}}
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
      name: String
  },
  data() {
    return {
      isAccordionOpen: false
    }
  },
  computed: {
      countries: function () { return MS.getCountriesByRegion(this.$props.name) }
  },
  methods: {
    toggleAccordion() {
      this.isAccordionOpen = !this.isAccordionOpen
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

.countries {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px 0;
  margin: 1em 0;
  transition: all 0.3s;
  max-height: 1000px;
  overflow: hidden;
}

.countries::after {
  gap: 0px 0px;
  content: "";
  min-width: 30%;
}

.hidden.countries {
  transition: all 0.3s;
  max-height: 0;
  margin: 0;
}
</style>
