<template lang="">
  <div class="container mt-3 w-50">
    <h1>Créer un nouveau produit</h1>
    <form action="" v-on:submit.prevent>
      <div class="mb-3">
        <label for="FormControlTitle" class="form-label">Nom du produit</label>
        <input
          v-model="formTitle"
          type="text"
          class="form-control"
          id="title"
          placeholder="Nom du produit"
        />
      </div>
      <div class="mb-3">
        <label for="FormControlDescription" class="form-label"
          >Description du produit</label
        >
        <textarea
          style="white-space: pre-line"
          v-model="formDescription"
          class="form-control"
          id="description"
          rows="3"
          placeholder="Description détaillée du produit"
        ></textarea>
      </div>
      <div class="mb-3">
        <label for="FormControlPrice" class="form-label">Prix du produit</label>
        <input
          v-model.number="formPrice"
          type="number"
          class="form-control"
          id="price"
          placeholder="Prix du produit"
        />
      </div>
      <div class="mb-3">
        <label for="FormControlWeight" class="form-label"
          >Poids du produit</label
        >
        <input
          v-model.number="formWeight"
          type="number"
          class="form-control"
          id="weight"
          placeholder="Poids du produit"
        />
      </div>
      <div class="mb-3">
        <label for="FormControlCategory" class="form-label"
          >Catégorie du produit</label
        >
        <select
          v-model="selectedCategory"
          name="categories"
          id="FormControlCategory"
          class="form-control"
        >
          <option value="">Choisir une catégorie</option>
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
      <button @click="createJson" type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
    <div class="test">
      <ul>
        <li>{{ formTitle }}</li>
        <li>{{ formDescription }}</li>
        <li>{{ formPrice }}</li>
        <li>{{ formWeight }}</li>
        <li>{{ selectedCategory }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
// import ProductsDataService from "../services/ProductsDataService";
import axios from "axios";

export default {
  name: "AddProduct",
  data() {
    return {
      formTitle: "",
      formDescription: "",
      formPrice: null,
      formWeight: null,
      selectedCategory: null,
    };
  },
  created() {
    console.log(this.$store.getters.isLoggedIn);
  },
  methods: {
    createJson() {
      let dataArray = [
        ["title", this.formTitle],
        ["description", this.formPrice],
        ["price", this.formPrice],
        ["weight", this.formWeight],
        ["category", this.selectedCategory],
      ];
      console.log(dataArray);
      const data = JSON.stringify(Object.fromEntries(dataArray));
      console.log(data);
      this.createProduct(data);
    },
    createProduct: async function (data) {
      try {
        console.log(data);
        axios.post(
          "http://localhost:8080/api/v1/products",
          { data },
          {
            headers: {
              authorization: "Bearer " + this.$store.getters.isLoggedIn,
            },
          }
        );
        // const req = await ProductsDataService.create(data);
        // console.log(req);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style></style>
