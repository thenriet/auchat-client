<template lang="">
  <div class="d-flex justify-content-center flex-wrap list-container">
    <div v-for="(product, index) in products" :key="index">
      <div class="card m-3 shadow-sm" style="width: 18rem">
        <img
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
          <button class="btn btn-primary" type="button">
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
    return { products: [] };
  },
  mounted: function () {
    this.getProducts();
    console.log(this.$route);
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
<style scoped>
a {
  text-decoration: none !important;
  color: white !important;
}

.btn-primary {
  background-color: #ffae8b !important;
}

.list-container {
  background-color: #f8f8f8;
}
</style>
