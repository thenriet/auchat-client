<template lang="">
  <div class="d-flex justify-content-center flex-wrap">
    <div v-for="(product, index) in products" :key="index">
      <div class="card m-3" style="width: 18rem">
        <img
          :src="product.picture"
          class="card-img-top"
          style="max-height: 10rem"
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
</style>
