<template>
  <div class="cart">
    <h1 class="title">Mon Panier</h1>
    <div v-show="!products.length">
      <p>
        <i>Ton panier est vide !</i>
      </p>

      <div>
        <router-link class="btn-card" to="/products"
          >Faire son shopping</router-link
        >
      </div>
    </div>
    <table class="table is-striped" v-show="products.length">
      <thead>
        <tr>
          <td>Article</td>
          <td>Prix</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="p in products">
          <td>{{ p.title }}</td>
          <td>${{ p.price }}</td>
          <td>
            <a href="#" class="btn-card" @click="removeFromCart(p)">
              Supprimer
            </a>
          </td>
        </tr>
        <tr>
          <td><b>Total:</b></td>
          <td></td>
          <td>
            <b>${{ total }}</b>
          </td>
        </tr>
      </tbody>
    </table>
    <p>
      <a href="#" v-show="products.length" class="btn-card" @click="checkout">
        Payer
      </a>
    </p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Cart",
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      products: "cartProducts",
    }),
    total() {
      return this.products.reduce((acc, cur) => acc + cur.price, 0);
    },
  },
  methods: {
    checkout() {
      alert("Pay us $" + this.total);
    },
    removeFromCart(p) {
      this.$store.commit("removeFromCart", p);
    },
  },
};
</script>

<style>
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
</style>
