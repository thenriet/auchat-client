<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view></router-view>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import FooterComponent from "./components/FooterComponent.vue";
export default {
  name: "App",
  components: { NavBar, FooterComponent },
};
</script>

<style>
#app {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f8f8f8;
  height: 100%;
}

.btn-main {
  background-color: #ffae8b;
  border-radius: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 28px;
  padding-right: 28px;
  color: white !important;
  border: none;
  text-decoration: none;
  cursor: pointer;
  bottom: 40px;
}

.error-msg {
  color: red;
  font-weight: 500;
  padding: 10px;
}

.card {
  border: none !important;
}
</style>
