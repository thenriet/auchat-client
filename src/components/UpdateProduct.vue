<template lang="">
  <div class="container mt-3 w-50">
    <h1>Modifier le produit</h1>
    <form action="" v-on:submit.prevent>
      <div class="form-floating mb-3">
        <input
          type="text"
          class="form-control"
          id="title"
          v-model="currentProduct.title"
          required
        />
        <label for="FormControlTitle" class="form-label">Nom</label>
      </div>
      <div class="form-floating mb-3">
        <textarea
          style="white-space: pre-line"
          class="form-control"
          id="description"
          rows="3"
          v-model="currentProduct.description"
          required
        ></textarea>
        <label for="FormControlDescription" class="form-label"
          >Description</label
        >
      </div>
      <div class="form-floating mb-3">
        <input
          type="number"
          class="form-control"
          id="price"
          v-model="currentProduct.price"
          required
        />
        <label for="FormControlPrice" class="form-label">Prix</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="number"
          class="form-control"
          id="weight"
          v-model="currentProduct.weight"
          oninput="this.value = this.valueAsNumber"
          required
        />
        <label for="FormControlWeight" class="form-label">Poids</label>
      </div>
      <div class="form-floating mb-3">
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
        <label for="FormControlCategory" class="form-label">Catégorie</label>
      </div>
      <div class="form-floating mb-3">
        <input
          ref="picture"
          @change="selectFile"
          type="file"
          class="form-control"
        />
        <label for="FormControlPicture" class="form-label">Image</label>
      </div>
      <div>
        <a class="btn-main" @click="checkForm" type="submit"> Valider </a>
      </div>
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
    </form>
  </div>
</template>

<script>
import ProductsDataService from "@/services/ProductsDataService";

export default {
  name: "UpdateProduct",
  data() {
    return {
      currentProduct: this.getProduct(this.$route.params.id),
      token: this.$store.getters.isLoggedIn,
      data: [],
      errors: [],
      msg: "",
    };
  },
  methods: {
    getProduct: async function (id) {
      try {
        let res = await ProductsDataService.get(id);
        let resJson = JSON.parse(JSON.stringify(res.data));
        this.currentProduct = resJson.data;
      } catch (err) {
        console.log(err);
      }
    },
    selectFile() {
      if (
        this.$refs.picture &&
        this.$refs.picture.files[0]["type"] === "image/jpeg"
      ) {
        this.currentProduct.picture = this.$refs.picture.files[0];
      } else {
        this.errors.push("Merci de choisir une image au format valide");
      }
    },
    createFile() {
      const formData = new FormData();
      console.log(formData.append("picture", this.currentProduct.picture));
    },

    checkForm: function (e) {
      this.errors = [];
      try {
        if (!this.currentProduct.title) this.errors.push("Un titre est requis.");
        if (!this.currentProduct.title.match(/^[a-zàâçéèêëîïôûùüÿñæœ .-]*$/i))
        this.errors.push(
          "Le titre ne doit pas contenir de numéros ni de caractères spéciaux."
        );
        if (!this.currentProduct.description)
        this.errors.push("Une description est requise.");
        if (!this.currentProduct.description.match(/^[a-zàâçéèêëîïôûùüÿñæœ .-]*$/i))
        this.errors.push(
          "La description ne doit pas contenir de numéros ni de caractères spéciaux."
        );
        if (!this.currentProduct.price) this.errors.push("Un prix est requis.");
        if (!this.currentProduct.weight) this.errors.push("Un poids est requis.");
        if (!this.currentProduct.category)
        this.errors.push("Une catégorie est requise.");
        if (!this.currentProduct.picture) this.errors.push("Une image est requise.");
        
        this.errors.length > 0 ? e.preventDefault() : this.createData() ;
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
        this.currentProduct.category,
        this.currentProduct.picture
      );
      this.updateProduct(this.currentProduct._id, this.data, this.token);
      this.data = [];
    },
    updateProduct: async function (id, data, token) {
      try {
        await ProductsDataService.update(id, data, token);
        this.$router.push("/products/");
      } catch (err) {
        console.log(err);
        this.errors.push = err.response.data.error;
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

.error-list {
  list-style: none;
}
</style>
