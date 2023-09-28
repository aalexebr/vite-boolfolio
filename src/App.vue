<script>
import axios from "axios";
// import componentTemplate from './components/componentTemplate.vue'
import HeaderComp from './components/HeaderComp.vue'
import MainComp from './components/MainComp.vue'

export default{
    data(){
      return{}
    },
    components: {
      HeaderComp,
      MainComp
    },
}
</script>

<template>
  <HeaderComp/>
  <MainComp/>
</template>

<style lang="scss">
@use './assets/scss/main.scss' as *;
@use './assets/scss/utilities.scss' as *;
</style>
