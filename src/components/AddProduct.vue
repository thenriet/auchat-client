<template lang="">
  <div class="container mt-3 w-50">
    <h1>Créer un nouveau produit</h1>
    <form action="">
      <div class="mb-3">
        <label for="FormControlTitle" class="form-label">Nom du produit</label>
        <input
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
          class="form-control"
          id="description"
          rows="3"
          placeholder="Description détaillée du produit"
        ></textarea>
      </div>
      <div class="mb-3">
        <label for="FormControlPrice" class="form-label">Prix du produit</label>
        <input
          type="text"
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
          type="text"
          class="form-control"
          id="weight"
          placeholder="Poids du produit"
        />
      </div>
      <div class="mb-3">
        <label for="FormControlCategory" class="form-label"
          >Catégorie du produit</label
        >
        <input type="text" class="form-control" id="category" />
      </div>
      <div class="mb-3">
        <label for="FormControlPicture" class="form-label">Image</label>
        <input type="text" class="form-control" id="image" />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>
<script>
export default {};
</script>
<style></style>
