<template lang="">
  <div class="container mt-3 w-50">
    <h1>Modifier le produit</h1>
    <form action="" v-on:submit.prevent>
      <div class="mb-3">
        <label for="FormControlTitle" class="form-label">Nom du produit</label>
        <input
          
          type="text"
          class="form-control"
          id="title"
          v-model="currentProduct.title"
          required
        />
      </div>
      <div class="mb-3">
        <label for="FormControlDescription" class="form-label"
          >Description du produit</label
        >
        <textarea
          style="white-space: pre-line"
          
          class="form-control"
          id="description"
          rows="3"
          v-model ="currentProduct.description"
          required
        ></textarea>
      </div>
      <div class="mb-3">
        <label for="FormControlPrice" class="form-label">Prix du produit</label>
        <input
          
          type="number"
          class="form-control"
          id="price"
          v-model="currentProduct.price"
          required
        />
      </div>
      <div class="mb-3">
        <label for="FormControlWeight" class="form-label"
          >Poids du produit</label
        >
        <input
          
          type="number"
          class="form-control"
          id="weight"
           v-model="currentProduct.weight"
          oninput="this.value = this.valueAsNumber"
          required
        />
      </div>
      <div class="mb-3">
        <label for="FormControlCategory" class="form-label"
          >Catégorie du produit</label
        >
        <select
          v-model="currentProduct.category"
          name="categories"
          id="FormControlCategory"
          class="form-control"
          required
        >
          <option value="toys">Jouet</option>
          <option value="food">Nourriture</option>
          <option value="accessories">Accessoires</option>
          <option value="utilities">Utilitaires</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="FormControlPicture" class="form-label">Image</label>
        <input type="text" class="form-control" id="image" />
      </div>
      <a class="btn-main" @click="checkForm" type="submit">
        Valider
      </a>
    </form>
  </div>
</template>

<script>
import ProductsDataService from "@/services/ProductsDataService";

export default {
  name: "UpdateProduct",
  data() {
    return {
      currentProduct: this.getProductAsync(this.$route.params.id),
      //   selectedCategory: null,
      token: this.$store.getters.isLoggedIn,
      data: [],
    };
  },
  methods: {
    getProductAsync: async function (id) {
      try {
        let res = await ProductsDataService.get(id);
        let resJson = JSON.parse(JSON.stringify(res.data));
        this.currentProduct = resJson.data;
        // console.log(this.currentProduct);
      } catch (err) {
        console.log(err);
      }
    },
    checkForm: function () {
      try {
        if (
          this.currentProduct.title &&
          this.currentProduct.description &&
          this.currentProduct.price &&
          this.currentProduct.weight &&
          this.currentProduct.category &&
          this.currentProduct.title.match(/[a-zA-Z]+\s/)
        ) {
          this.createData();
          console.log("data reçu");
        }
      } catch (err) {
        console.log(err);
      }
    },
    createData() {
      this.data.push(
        this.currentProduct.title,
        this.currentProduct.description,
        this.currentProduct.price,
        this.currentProduct.weight,
        this.currentProduct.category
      );
      console.log(this.token);
      this.updateProduct(this.currentProduct._id, this.data, this.token);
      this.data = [];
    },
    updateProduct: async function (id, data, token) {
      try {
        await ProductsDataService.update(id, data, token);
        this.$router.push("/products/");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style></style>
