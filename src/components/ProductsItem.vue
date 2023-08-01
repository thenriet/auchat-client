<template lang="">
  <div class="card" style="width: 18rem">
    <img src="" class="card-img-top" alt="" />
    <div class="card-body">
      <h5 class="card-title">{{ currentProduct.title }}</h5>
      <p class="card-text">
        {{ currentProduct.description }}
      </p>
      <p class="card-text">{{ currentProduct.price }} euros</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</template>
<script>
import ProductsDataService from "@/services/ProductsDataService";

export default {
  name: "productsItem",
  data() {
    return {
      currentProduct: this.getProductAsync(this.$route.params.id),
    };
  },
  methods: {
    getProductAsync: async function (id) {
      try {
        let res = await ProductsDataService.get(id);
        let resJson = JSON.parse(JSON.stringify(res.data));
        this.currentProduct = resJson.data;
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
<style lang=""></style>
