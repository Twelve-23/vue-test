<template>
  <div id="app">
    <ItemizedOrder/>
  </div>
</template>

<script>
import ItemizedOrder from './components/ItemizedOrder.vue'

export default {
  name: 'App',
  components: {
    ItemizedOrder,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
