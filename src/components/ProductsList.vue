<template lang="">
  <div class="d-flex justify-content-center flex-wrap list-container">
    <div v-if="!productsFetched" class="loading">Veuillez patienter</div>

    <div v-for="product in products" :key="product._id">
      <div class="card m-3 shadow-sm">
        <img
          v-if="product.picture.includes(product._id)"
          :src="'http://localhost:8080/uploads/' + product.picture"
          class="card-img-top"
          alt="picture of a cute cat"
        />
        <img v-else 
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
    return {
      products: [],
      picture: null,
      product: null,
      productsFetched: false,
    };
  },
  created() {
    this.getProducts();
  },
  async beforeRouteUpdate(to, from) {
    this.products = null;
    try {
      this.post = await this.getProducts();
    } catch (error) {
      this.error = error.toString();
    }
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

.card-img-top {
  height: 13rem;
}
</style>
