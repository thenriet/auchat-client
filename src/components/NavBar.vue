<template>
  <div>
    <nav class="navbar">
      <router-link to="/" class="navbar-brand"
        ><img
          class="logo"
          alt="AuChat logo"
          src="../assets/chat.png"
        />AuChat</router-link
      >
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/products/" class="nav-link"
            >Tous nos produits</router-link
          >
        </li>
      </div>

      <div class="navbar-nav mr-auto" v-if="getRole === 'admin'">
        <li class="nav-item">
          <router-link to="/add/" class="nav-link"
            >Créer un produit</router-link
          >
        </li>
      </div>

      <div class="navbar-nav mr-auto">
        <li class="nav-item" v-if="!this.$store.getters.isLoggedIn">
          <router-link to="/login" class="nav-link"
            >Se connecter<img
              class="icone"
              alt="connexion icone"
              src="../assets/connexion.png"
          /></router-link>
        </li>
        <li class="nav-logged-in" v-if="this.$store.getters.isLoggedIn">
          {{ username }}
          <img
            class="icone-deco"
            alt="connexion icone"
            src="../assets/deconnexion.png"
            @click="logout"
          />
        </li>
      </div>

      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/cart" class="nav-link"
            >Mon Panier : <span> ({{ itemsInCart }})</span></router-link
          >
        </li>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
    };
  },
  async created() {
    this.username = this.$store.getters.getUser.name;
  },
  // mounted() {
  //   this.$store.dispatch("getProducts");
  // },
  computed: {
    getRole() {
      return this.$store.getters.getRole;
    },
    itemsInCart() {
      let cart = this.$store.getters.cartProducts;
      return cart.length;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      if (this.$route.name !== "home") {
        this.$router.push("/");
      }
    },
  },
};
</script>
<style>
.logo {
  width: 30px;
  margin-right: 20px;
}

.icone {
  width: 30px;
  margin-left: 10px;
}

.icone-deco {
  width: 30px;
  margin-left: 10px;
  cursor: pointer;
}

.navbar {
  padding-left: 24px !important;
  padding-right: 24px !important;
  position: fixed;
  box-shadow: 1px 1px 15px 0 rgba(0, 0, 0, 0.12);
  display: flex;
  background-color: white;
}

.navbar a {
  color: #2c3e50 !important;
}

.nav-logged-in {
  display: flex;
  align-items: center;
}
</style>
