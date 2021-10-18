<template>
  <div class="Test">
    <h3>ASIN list</h3>
    <p v-for="(item, index) in itemizedList" :key="index">
      {{ item }}
    </p>
  </div>
</template>

<script>
//import fs from "fs";
import json from "../assets/data.json";
export default {
  name: "JsonDataReader",
  data() {
    const result = [];
    const periods = json.periods;
    const lenght = periods.length;

    periods.map(({ itemized }, index) => {
      if (index < lenght - 1)
        for (const key in itemized) {
          if (itemized[key].orders > 20) result.push(key);
        }
    });
    console.log(result);
    return {
      itemizedList: result,
    };
  },
};
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
