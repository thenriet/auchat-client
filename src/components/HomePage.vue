<template>
  <div>
    <div class="main-image">
      <div class="main-card">
        <h1>Bienvenue {{ getUsername }}</h1>
        <router-link to="/products"
          ><button class="btn-home">Voir le catalogue</button></router-link
        >
      </div>
    </div>
    <div class="cards-home">
      <div class="card-home-left"><h2>Jouets</h2></div>
      <div class="card-home-right" style="width: 18rem">
        <h2>Accessoires</h2>
      </div>
      <div class="card-home-left"><h2>Hygiène</h2></div>
    </div>
    <h3>Les jouets</h3>
    <div v-if="!toysFetched" class="loading">Veuillez patienter</div>
    <div v-if="!toysFetched" class="lds-roller">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="d-flex justify-content-center flex-wrap">
      <div v-for="product in products" :key="product._id">
        <ProductsItem :product="product"></ProductsItem>
      </div>
    </div>
  </div>
</template>

<script>
import ProductsDataService from "../services/ProductsDataService";
import ProductsItem from "./ProductsItem.vue";

export default {
  name: "HomePage",
  data() {
    return {
      products: [],
      toysFetched: false,
    };
  },
  components: { ProductsItem },
  mounted: function () {
    this.getToys();
  },
  computed: {
    getUsername() {
      return this.$store.getters.getUser.name;
    },
  },
  methods: {
    getToys: async function () {
      let res = await ProductsDataService.getAllToys();
      this.products = res.data.data;
      this.toysFetched = true;
    },
  },
};
</script>

<style>
.card-btn {
  margin-bottom: 20px;
}

h2 {
  color: white !important;
  font-weight: 600 !important;
  font-size: 25px !important;
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
  height: 600px;
}

.cards-home {
  display: flex;
  justify-content: center;
  margin: 35px;
}

.card-home-left {
  width: 20rem;
  padding: 48px;
  border-radius: 16px;
  background-color: #f9ad88;
  margin: 10px;
}

.card-home-right {
  width: 20rem;
  padding: 48px;
  border-radius: 16px;
  background-color: #d9ddce;
  margin: 10px;
}

.card-body {
  position: relative;
  min-height: 15rem;
}

.card-text {
  min-height: 60px;
}

.btn-home {
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
}

.btn-list {
  left: 33%;
  position: absolute;
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
  position: absolute;
  bottom: 40px;
}
</style>
