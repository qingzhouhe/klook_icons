<template>
  <div>
    <app-header></app-header>
    <search-filter><search-filter>
  </div>
</template>

<script>
import header from './components/header.vue';
import searchFilter from './components/searchFilter.vue';


export default {
  name: 'app',
  components: {
    'app-header': header,
    'search-filter': searchFilter
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App' 
    }
  }
}
</script>

<style>
body {
  margin: 0px;
}
</style>
