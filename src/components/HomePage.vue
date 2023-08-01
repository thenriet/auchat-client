<template>
  <div>
    <div class="main-image">
      <div class="main-card">
        <h1>Bienvenue</h1>
        <router-link to="/products"
          ><button class="main-btn">Voir le catalogue</button></router-link
        >
      </div>
    </div>
    <ProductsList></ProductsList>
  </div>
</template>

<script>
import ProductsList from "./ProductsList.vue";

export default {
  name: "HomePage",
  components: { ProductsList },
};
</script>

<style>
.main-btn {
  background-color: #ffae8b;
  border-radius: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 28px;
  padding-right: 28px;
  color: white;
  border: none;
}
.main-card h1 {
  align-self: center;
}

.main-card {
  align-self: center;
  width: 400px;
  height: 250px;
  border-radius: 16px;
  background-color: white;
  display: grid;
}

.main-image {
  display: flex;
  justify-content: center;
  background-image: url("../assets/home-main-image.jpg");
  background-size: cover;
  background-position: center;
  height: 400px;
}
</style>
