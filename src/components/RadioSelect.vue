<template>
    <div class="radioSelect">
    <input
      type="radio"
      :value="id"
      :name="name"
      :checked="checked"
      readOnly
    />
  </div>
</template>

<script>
import MS from '@/store/index'

export default {
  name: 'RadioSelect',
  props: {
    id: String,
    name: String
  },
  data(props) {
      return {
          id2: props.id
          }
  },
  computed: {
      checked: function () {
          return MS.countriesVisited.includes(this.$props.id)
          }
  }
}
</script>

<style scoped>
.radioSelect {
    display: inline;
}

.radioSelect input {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1em;  
    height: 1em;   
    font-size: 1.25em;
    line-height: 1.5em;
    margin: auto 0.25em auto;
}

.radioSelect input[type="radio"]:after {
  width: 1em;
  height: 1em;
  border-radius: 1.25em;
  position: relative;
  background-color: white;
  content: "";
  display: inline-block;
  visibility: visible;
  border: 7px solid white;
  box-sizing: border-box;
}

.radioSelect input[type="radio"]:checked:after {
  width: 1em;
  height: 1em;
  border-radius: 1em;
  position: relative;
  background-color: #B45C5C;
  content: "";
  display: inline-block;
  visibility: visible;
  border: 3px solid white;
  box-sizing: border-box;
}
</style>
