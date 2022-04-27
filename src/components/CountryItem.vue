<template>
  <div class="country" @click="toggleVisited">
      <RadioSelect :id="id" :name="name" />
      <span>{{name}}</span>
  </div>
</template>

<script>
import RadioSelect from '@/components/RadioSelect.vue'
import MS from '@/store'

export default {
  name: 'CountryItem',
  components: {
      RadioSelect
  },
  props: {
      name: String,
      id: String
  },
  computed: {
      isChecked: function () {
          return MS.countriesVisited.includes(this.$props.id)
          }
  },
  methods: {
      toggleVisited() {
          this.isChecked ? MS.removeVisited(this.$props.id) : MS.addVisited(this.$props.id) ;
      }
  }
}
</script>

<style scoped>
.country {
    display: flex;
    width: 30%;
}
.country  span {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    text-align: left;
}

@media only screen and (max-width: 900px) {
  .country  {
      width: 50%;
  }
}
</style>
