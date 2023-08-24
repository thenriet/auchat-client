<template lang="">
  <div class="d-flex justify-content-center flex-wrap list-container">
    <div v-for="(product, index) in products" :key="index">
      <div class="card m-3 shadow-sm">
        <!-- <img
          v-if="product.picture.includes(product._id)"
          :src="'http://localhost:8080/uploads/' + product.picture"
          class="card-img-top"
          alt="picture of a cute cat"
        /> -->
        <img
          
          :src="product.picture"
          class="card-img-top"
          alt="picture of a cute cat"
        />
        <div class="card-body">
          <h5 class="card-title">{{ product.title }}</h5>
          <p class="card-text">
            {{ product.description }}
          </p>
          <p class="card-text">{{ product.price }} €</p>

          <router-link
            :to="`/products/${product._id}`"
            class="btn-main"
            id="btn-details"
            type="button"
            >Détails</router-link
          >
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
  created: function () {
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
};
</script>
<style scoped>
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

.card-img-top {
  height: 13rem;
}

#btn-details {
  position: absolute;
  bottom: 40px;
  left: 122px;
}
</style>
