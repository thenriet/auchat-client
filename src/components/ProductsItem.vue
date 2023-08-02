<template>
  <div class="container d-flex justify-content-center">
    <div class="card m-3 shadow-sm" style="width: 18rem">
      <img
        :src="currentProduct.picture"
        class="card-img-top"
        style="max-height: 15rem"
        alt=""
      />
      <div class="card-body">
        <h5 class="card-title">{{ currentProduct.title }}</h5>
        <p class="card-text">
          {{ currentProduct.description }}
        </p>
        <p class="card-text">{{ currentProduct.price }} euros</p>
        <p class="card-text">{{ currentProduct.weight }} kg</p>
        <a href="#" class="btn btn-primary">Ajouter au panier</a>
      </div>
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
<style>
.btn-primary {
  background-color: #ffae8b !important;
}
</style>
