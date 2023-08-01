<template>
  <div>
    <div class="main-image">
      <div class="card">
        <h1></h1>
      </div>
    </div>
    <ProductsList></ProductsList>
  </div>
</template>

<script>
import ProductsList from "../components/ProductsList.vue";

export default {
  components: {
    ProductsList,
  },
  data() {},
};
</script>

<style>
.main-image {
  background-image: url("../assets/home-main-image.jpg");
  background-size: cover;
  background-position: center;
  height: 400px;
}
</style>