<template lang="">
  <div class="container mt-3 w-50">
    <h1>Créer un nouveau produit</h1>
    <form  v-on:submit.prevent>
      <div class="form-floating mb-3">
        <input
          v-model="formTitle"
          type="text"
          class="form-control"
          id="title"
          placeholder="Nom du produit"
          required
        />
        <label for="FormControlTitle" class="form-label">Nom</label>
      </div>
      <div class="form-floating mb-3">    
        <textarea
          style="white-space: pre-line"
          v-model="formDescription"
          class="form-control"
          id="description"
          rows="3"
          placeholder="Description détaillée du produit"
          required
        ></textarea>
        <label for="FormControlDescription" class="form-label"
          >Description</label
        >
      </div>
      <div class="form-floating mb-3">
        <input
        v-model.number="formPrice"
        type="number"
        class="form-control"
        id="price"
        placeholder="Prix du produit"
        required
        />
        <label for="FormControlPrice" class="form-label">Prix</label>
      </div>
      <div class="form-floating mb-3">
        <input
        v-model.number="formWeight"
        type="number"
        class="form-control"
        id="weight"
        placeholder="Poids du produit"
        oninput="this.value = this.valueAsNumber"
        required
        />
        <label for="FormControlWeight" class="form-label"
          >Poids</label
        >
      </div>
      <div class="form-floating mb-3">
        <select
        v-model="selectedCategory"
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
      <label for="FormControlCategory" class="form-label"
        >Catégorie</label
      >
      </div>
      <div class="form-floating mb-3">
        <input ref="picture" @change="selectFile" type="file"  class="form-control">      
        <label for="FormControlPicture" class="form-label">Image</label>
      </div>
      <button @click="checkForm" type="submit" class="btn-main">
        Valider
      </button>
    </form>
    <div class="m-3 text-danger">
      <p v-if="errors.length">
        <b>Veuillez corriger une ou plusieurs erreurs :</b>
        <ul>
          <li class= "error-list" v-for="(error, index) in errors" :key=index>
           {{ error }}
          </li>
        </ul>
      </p>
    </div>
  </div>
</template>

<script>
import ProductsDataService from "@/services/ProductsDataService";

export default {
  name: "AddProduct",
  data() {
    return {
      formTitle: "",
      formDescription: "",
      formPrice: null,
      formWeight: null,
      selectedCategory: null,
      token: this.$store.getters.isLoggedIn,
      data: [],
      errors: [],
      picture: "",
    };
  },
  methods: {
    selectFile() {
      if (this.$refs.picture.files[0]["type"] === "image/jpeg") {
        this.picture = this.$refs.picture.files[0];
      } else {
        this.errors.push("Merci de choisir une image au format valide");
      }
    },
    createFile() {
      const formData = new FormData();
      console.log(formData.append("picture", this.picture));
    },
    checkForm: function (e) {
      this.errors = [];
      if (!this.formTitle) this.errors.push("Un titre est requis.");
      if (!this.formTitle.match(/^[a-zàâçéèêëîïôûùüÿñæœ .-]*$/i))
        this.errors.push(
          "Le titre ne doit pas contenir de numéros ni de caractères spéciaux."
        );
      if (!this.formDescription)
        this.errors.push("Une description est requise.");
      if (!this.formDescription.match(/^[a-zàâçéèêëîïôûùüÿñæœ .-]*$/i))
        this.errors.push(
          "La description ne doit pas contenir de numéros ni de caractères spéciaux."
        );
      if (!this.formPrice) this.errors.push("Un prix est requis.");
      if (!this.formWeight) this.errors.push("Un poids est requis.");
      if (!this.selectedCategory)
        this.errors.push("Une catégorie est requise.");
      if (!this.picture) this.errors.push("Une image est requise.");
      this.errors.length > 0 ? e.preventDefault() : this.createData() ;
    },
    async createData() {
      const formData = new FormData();
      formData.append("title", this.formTitle);
      formData.append("description", this.formDescription);
      formData.append("price", this.formPrice);
      formData.append("weight", this.formWeight);
      formData.append("category", this.selectedCategory);
      formData.append("picture", this.picture, "picture.jpg");

      await ProductsDataService.create(formData, this.token)

      this.$router.push("/products");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/main.scss";

.btn-main {
  border-radius: 24px;
}

.error-list {
  list-style: none;
}
</style>