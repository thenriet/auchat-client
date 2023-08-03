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
        <a href="#" class="btn-card">Ajouter au panier</a>
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
.card {
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15) !important;
  border: none !important;
  border-radius: 16px !important;
}
.btn-card {
  background-color: #ffae8b;
  border-radius: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 28px;
  padding-right: 28px;
  color: white;
  border: none;
}
</style>
