<template lang="">
  <div class="container">{{ currentProduct }}</div>
</template>
<script>
import ProductsDataService from "@/services/ProductsDataService";

export default {
  name: "productsItem",
  data() {
    return {
      currentProduct: null,
    };
  },
  mounted: function () {
    this.getProductAsync(this.$route.params.id);
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
  },
};
</script>
<style lang=""></style>
