<template>
  <div>
    <div class="main-image">
      <div class="main-card">
        <h1>Bienvenue {{ getUsername }}</h1>
        <router-link to="/products"
          ><button class="btn-main">Voir le catalogue</button></router-link
        >
      </div>
    </div>
    <div class="cards-home">
      <div class="card-home-left"><h2>Jouets</h2></div>
      <div class="card-home-right" style="width: 18rem">
        <h2>Accessoires</h2>
      </div>
      <div class="card-home-left"><h2>Hygiène</h2></div>
    </div>
    <h3>Les jouets</h3>
    <div class="d-flex justify-content-center flex-wrap">
      <div v-for="(toy, index) in toys" :key="index">
        <div class="card m-3" style="width: 18rem">
          <img
            v-if="toy.picture.includes(toy._id)"
            :src="'http://localhost:8080/uploads/' + toy.picture"
            class="card-img-top"
            style="height: 13rem"
            alt=""
          />
          <img
            v-else
            :src="toy.picture"
            class="card-img-top"
            style="height: 13rem"
            alt=""
          />
          <div class="card-body" style="min-height: 15rem">
            <h5 class="card-title">{{ toy.title }}</h5>
            <p class="card-text">
              {{ toy.description }}
            </p>
            <p class="card-text">{{ toy.price }} euros</p>
            <button class="btn-main" type="button">
              <router-link :to="`/products/${toy._id}`">Voir</router-link>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductsDataService from "../services/ProductsDataService";

export default {
  name: "HomePage",
  data() {
    return {
      toys: [],
    };
  },
  components: {},
  mounted: function () {
    this.getToys();
  },
  computed: {
    getUsername() {
      return this.$store.getters.getUser.name;
    },
  },
  methods: {
    getToys: async function () {
      let res = await ProductsDataService.getAllToys();
      this.toys = res.data.data;
    },
  },
};
</script>

<style>
.card-btn {
  margin-bottom: 20px;
}

h2 {
  color: white !important;
  font-weight: 600 !important;
  font-size: 25px !important;
}

.main-card h1 {
  align-self: center;
}

.main-card {
  align-self: center;
  width: 400px;
  height: 250px;
  border-radius: 16px;
  background-color: white;
  display: grid;
}

.main-image {
  display: flex;
  justify-content: center;
  background-image: url("../assets/home-main-image.jpg");
  background-size: cover;
  background-position: center;
  height: 600px;
}

.cards-home {
  display: flex;
  justify-content: center;
  margin: 35px;
}

.card-home-left {
  width: 20rem;
  padding: 48px;
  border-radius: 16px;
  background-color: #f9ad88;
  margin: 10px;
}

.card-home-right {
  width: 20rem;
  padding: 48px;
  border-radius: 16px;
  background-color: #d9ddce;
  margin: 10px;
}
</style>
