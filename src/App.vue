<template>
  <div id="app">
    <nav class="navbar">
      <router-link to="/" class="navbar-brand"
        ><img
          class="logo"
          alt="AuChat logo"
          src="./assets/chat.png"
        />AuChat</router-link
      >
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/products" class="nav-link"
            >Tous nos produits</router-link
          >
        </li>
      </div>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/" class="nav-link"
            >Se connecter<img
              class="icone"
              alt="connexion icone"
              src="./assets/connexion.png"
          /></router-link>
        </li>
      </div>
    </nav>
    <router-view></router-view>
    <!-- <ProductsList></ProductsList> -->
    <footer class="footer">
      <li class="footer-item">Icônes : Freepik, Flaticon</li>
      <li class="footer-item">Fait par Ondine et Thomas</li>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
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

.navbar {
  padding-left: 24px !important;
  padding-right: 24px !important;
  position: fixed;
  box-shadow: 1px 1px 15px 0 rgba(0, 0, 0, 0.12);
  display: flex;
}

.footer {
  display: flex;
  justify-content: space-between;
  padding-left: 24px;
  padding-right: 24px;
}

.footer-item {
  list-style: none;
}

#app {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
