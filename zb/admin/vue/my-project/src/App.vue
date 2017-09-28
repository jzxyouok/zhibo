<template>
  <div id="app">
    <ihead></ihead>
    <!-- <img src="./assets/logo.png"> -->
    <router-view></router-view>
    <ifoot></ifoot>
  </div>
</template>

<script>
import Ihead from './components/public/head'
import Ifoot from './components/public/foot'

export default {
  name: 'app',
  components:{
    Ihead,Ifoot
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
