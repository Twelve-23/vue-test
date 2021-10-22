<template>
  <div class="Test">
    <h1>Look for items that got more than 20 orders</h1>
    <table class="table table-striped table-bordered" border="1px">
            <thead>
                <tr>
                  <th>ASIN</th>
                  <th>Orders</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="period in getOrderData" :key="period.id">
                   <td>{{period[0]}}</td>
                   <td>{{period[1].orders}}</td>
                </tr>
            </tbody>
        </table>
  </div>
</template>

<script>
import dbData from '../assets/data.json'
export default {
  name: 'ItemizedOrder',
  data() {
    return {
      actualData:[],
    }
  },
  computed:{
    getOrderData: function() {
      return this.actualData.filter(el => el[1].orders > 20)
    }
  },
  mounted() {
    dbData.periods.map(period => period.itemized).map(data => {
      Object.entries(data).map(item => this.actualData.push(item) )});
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
