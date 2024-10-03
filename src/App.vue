<template>
  <div id="app">
    <GlobalHeader></GlobalHeader>
    <RouterView></RouterView>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>

<script>
import GlobalHeader from './components/GlobalHeader.vue';

export default {
  name: 'app',
  components: {
    GlobalHeader
  }
}


</script>