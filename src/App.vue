<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <ProductsList></ProductsList>
  </div>
</template>

<script>
import ProductsList from "./components/ProductsList.vue";

export default {
  name: "App",
  components: {
    ProductsList,
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
