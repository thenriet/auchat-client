<template lang="">
  <div>
    <li v-for="(product, index) in products" :key="index">
      {{ product.title }}
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
  },
  methods: {
    getProducts: async function () {
      // let result = await axios.get(`${process.env.VUE_APP_APIURL}`);
      let res = await ProductsDataService.getAll();
      console.log(res);
      this.products = res.data.data;
    },
  },
};
</script>
<style lang=""></style>
