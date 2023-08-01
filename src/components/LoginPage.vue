<template>
  <div>
    <h1>Se connecter</h1>
    <input type="text" placeholder="Adresse mail" v-model="email" />
    <input type="text" placeholder="Mot de passe" v-model="password" />
    <input type="button" @click="login" value="Valider" />
    <p v-if="msg">{{ msg }}</p>
  </div>
</template>

<script>
import AuthService from "../services/AuthService.js";

export default {
  data() {
    return {
      email: "",
      password: "",
      msg: "",
    };
  },
  methods: {
    async login() {
      try {
        const credentials = {
          email: this.email,
          password: this.password,
        };
        const response = await AuthService.login(credentials);
        this.msg = response.error;
        console.log(response);
        const token = response.token;
        const user = response.user;

        this.$store.dispatch("login", { token, user });
        this.$router.push("/");
      } catch (error) {
        console.log(error.response.data);
      }
    },
  },
};
</script>

<style scoped>
</style>
