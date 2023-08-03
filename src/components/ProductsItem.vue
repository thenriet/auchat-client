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
        <div class="card-admin" v-if="role">
          <a href="#" class="btn-card" @click="showModal"
            >Supprimer le produit</a
          >
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
        </div>
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
      role: null,
      token: this.$store.getters.isLoggedIn,
    };
  },
  async created() {
    if (this.$store.getters.getUser.role === "admin") {
      this.role = this.$store.getters.getUser.role;
    }
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
    showModal() {
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
    deleteProduct: async function (id) {
      try {
        id = this.currentProduct._id;
        await ProductsDataService.delete(id, this.token);
        this.$router.push("/products");
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
  color: white !important;
  border: none;
  text-decoration: none;
}

.card-admin {
  margin-top: 30px;
  margin-bottom: 20px;
}

.btn-modal {
  text-align: center;
  margin-top: 30px;
}
</style>
