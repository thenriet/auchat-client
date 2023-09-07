<template>
  <div class="container d-flex justify-content-center">
    <div class="card m-3 shadow-sm" style="width: 18rem" v-if="productsFetched">
      <img
        v-if="product.picture.includes(product._id)"
        :src="'http://localhost:8080/uploads/' + product.picture"
        class="card-img-top"
        alt=""
      />
      <img v-else :src="product.picture" class="card-img-top" alt="" />
      <div class="card-body">
        <h5 class="card-title">{{ product.title }}</h5>
        <p class="card-text">
          {{ product.description }}
        </p>
        <p class="card-text">{{ product.price }} €</p>
        <p class="card-text">{{ product.weight }} kg</p>
        <div v-if="routeName === 'products-item'">
          <a href="#" @click="addToCart(product)" class="btn-card">
            Ajouter au panier
          </a>
        </div>
        <div class="card-admin" v-if="role && routeName === 'products-item'">
          <div class="card-modif my-4">
            <router-link
              class="btn-card"
              type="button"
              :to="`/update/${product._id}`"
              >Modifier le produit
            </router-link>
          </div>
          <b-modal
            ref="my-modal"
            hide-footer
            title="Confirmation de suppression"
          >
            <div class="d-block text-center">
              <h3>Supprimer le produit {{ product.title }} ?</h3>
            </div>
            <div class="btn-modal">
              <a href="#" class="btn-card" @click="deleteProduct">Supprimer</a>
            </div>
            <b-button
              class="mt-3"
              variant="outline-danger"
              block
              @click="hideModal"
              >Fermer</b-button
            >
          </b-modal>
          <button class="btn-card" @click="showModal">
            Supprimer le produit
          </button>
        </div>
        <div v-if="routeName !== 'products-item'">
          <router-link
            :to="{
              name: 'products-item',
              params: { product: product, id: product._id },
            }"
            class="btn-main"
            id="btn-details"
            type="button"
            >Détails</router-link
          >
          <div class="add-cart">
            <a href="#" @click="addToCart(product)" class="btn-card">
              Ajouter au panier
            </a>
          </div>
        </div>
      </div>
    </div>
    <div
      class="card m-3 shadow-sm"
      style="width: 18rem"
      v-if="productsFetchedByApi"
    >
      <img
        v-if="currentProduct.picture.includes(currentProduct._id)"
        :src="'http://localhost:8080/uploads/' + currentProduct.picture"
        class="card-img-top"
        alt=""
      />
      <img v-else :src="currentProduct.picture" class="card-img-top" alt="" />
      <div class="card-body">
        <h5 class="card-title">{{ currentProduct.title }}</h5>
        <p class="card-text">
          {{ currentProduct.description }}
        </p>
        <p class="card-text">{{ currentProduct.price }} €</p>
        <p class="card-text">{{ currentProduct.weight }} kg</p>
        <div class="card-admin" v-if="role && routeName === 'products-item'">
          <div class="card-modif my-4">
            <router-link
              class="btn-card"
              type="button"
              :to="`/update/${currentProduct._id}`"
              >Modifier le produit
            </router-link>
          </div>
          <b-modal
            ref="my-modal"
            hide-footer
            title="Confirmation de suppression"
          >
            <div class="d-block text-center">
              <h3>Supprimer le produit {{ currentProduct.title }} ?</h3>
            </div>
            <div class="btn-modal">
              <a href="#" class="btn-card" @click="deleteProduct">Supprimer</a>
            </div>
            <b-button
              class="mt-3"
              variant="outline-danger"
              block
              @click="hideModal"
              >Fermer</b-button
            >
          </b-modal>
          <button class="btn-card" @click="showModal">
            Supprimer le produit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ProductsDataService from "@/services/ProductsDataService";
// import { mapGetters, mapActions } from "vuex";

export default {
  name: "productsItem",
  data() {
    return {
      productsFetched: false,
      productsFetchedByApi: false,
      currentProduct: this.product,
      role: null,
      token: this.$store.getters.isLoggedIn,
    };
  },
  props: ["product"],
  created() {
    if (this.$store.getters.getUser.role === "admin") {
      this.role = this.$store.getters.getUser.role;
    }
    this.product
      ? (this.productsFetched = true)
      : this.getProduct(this.$route.params.id);
  },
  computed: {
    // ...mapGetters({
    //   products: "allProducts",
    //   length: "getNumberOfProducts",
    // }),
    routeName() {
      return this.$route.name;
    },
  },

  methods: {
    getProduct: async function (id) {
      try {
        let res = await ProductsDataService.get(id);
        this.currentProduct = res.data.data;
        this.productsFetchedByApi = true;
      } catch (err) {
        console.log(err);
      }
    },
    addToCart(product) {
      this.$store.commit("addToCart", product);
    },
    showModal() {
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
    deleteProduct: async function (id) {
      try {
        id = this.product._id;
        await ProductsDataService.delete(id, this.token);
        this.$router.push("/products");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";

a {
  text-decoration: none;
}
.card {
  // box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15) !important;
  border: none !important;
  border-radius: 16px !important;
  // max-height: 40rem !important;
}

.card-modif {
  margin: 20px;
}

.card-modif a {
  color: white !important;
}

.btn-modal {
  text-align: center;
  margin-top: 30px;
}

.card-img-top {
  max-height: 12rem;
}

.card-text {
  min-height: 30px;
}

.btn-card {
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
  left: 33%;
}

p:nth-of-type(1) {
  min-height: 60px;
}

.add-cart {
  padding: 20px;
}
</style>