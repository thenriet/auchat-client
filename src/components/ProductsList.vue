<template lang="">
  <div class="d-flex justify-content-center flex-wrap list-container">
    <div v-if="!productsFetched" class="loading">
      <p>Veuillez patienter</p>
      <div class="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <div v-for="product in products" :key="product._id">
      <ProductsItem :product="product"></ProductsItem>
    </div>
  </div>
</template>
<script>
import ProductsDataService from "../services/ProductsDataService";
import ProductsItem from "./ProductsItem.vue";

export default {
  data: () => {
    return {
      products: [],
      picture: null,
      productsFetched: false,
    };
  },
  components: {
    ProductsItem,
  },
  created() {
    this.getProducts();
  },
  onBeforeUpdate() {
    this.getProducts();
  },
  methods: {
    getProducts: async function () {
      try {
        let res = await ProductsDataService.getAll();
        this.products = res.data.data;
        this.productsFetched = true;
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
<style scoped>
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
  bottom: 40px;
}
a {
  text-decoration: none !important;
  color: white !important;
}

.list-container {
  background-color: #f8f8f8;
}

.card {
  width: 18rem;
}

.card-body {
  position: relative;
  min-height: 15rem;
}
</style>
