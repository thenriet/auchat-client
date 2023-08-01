<template lang="">
  <div>
    <li v-for="(product, index) in products" :key="index">
      {{ product.title }}
      <router-link :to="`/products/${product._id}`">About</router-link>
    </li>
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
<style lang=""></style>
