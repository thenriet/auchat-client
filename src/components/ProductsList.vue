<template lang="">
  <div class="d-flex justify-content-center flex-wrap list-container">
    <div v-for="(product, index) in products" :key="index">
      <div class="card m-3 shadow-sm" style="width: 18rem">
        <img
          v-if="product.picture.includes(product._id)"
          :src="'http://localhost:8080/uploads/' + product.picture"
          class="card-img-top"
          style="height: 13rem"
          alt=""
        />
        <img
          v-else
          :src="product.picture"
          class="card-img-top"
          style="height: 13rem"
          alt=""
        />
        <div class="card-body">
          <h5 class="card-title">{{ product.title }}</h5>
          <p class="card-text">
            {{ product.description }}
          </p>
          <p class="card-text">{{ product.price }} euros</p>
          <button class="btn-main" type="button">
            <router-link :to="`/products/${product._id}`">Détails</router-link>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ProductsDataService from "../services/ProductsDataService";

export default {
  data: () => {
    return { products: [], picture: null, product: null };
  },
  mounted: function () {
    this.getProducts();
  },
  updated: function () {
    this.getProducts();
  },
  methods: {
    getProducts: async function () {
      let res = await ProductsDataService.getAll();
      this.products = res.data.data;
    },
  },
  components: {},
};
</script>
<style>
a {
  text-decoration: none !important;
  color: white !important;
}

.list-container {
  background-color: #f8f8f8;
}
</style>
