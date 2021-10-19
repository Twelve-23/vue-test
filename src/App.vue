<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <b-container fluid>
      <table class="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">Asin</th>
            <th scope="col">Orders</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(itemize, index) in itemizedData" :key="index">
            <td>{{ itemize.asin }}</td>
            <td>{{ itemize.orders }}</td>
          </tr>
        </tbody>
      </table>
    </b-container>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Orders from "./assets/data.json";
export default {
  data() {
    return {
      Orders,
      itemized: [],
    };
  },
  name: "App",
  components: {
    // HelloWorld
  },
  computed: {
    itemizedData: function () {
      return this.itemized.filter((i) => i.orders > 20);
    },
  },
  mounted() {
    let itemize = [];
    this.Orders.periods.map((data) => {
      itemize = [itemize, ...Object.values(data.itemized)];
    });
    this.itemized = itemize;
  },
};
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
