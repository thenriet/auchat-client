<template>
  <div>
    <form>
      <div class="form-group">
        <h1>Se connecter</h1>
        <input
          class="form-item"
          type="text"
          placeholder="Adresse mail"
          v-model="email"
        />
        <input
          class="form-item"
          type="text"
          placeholder="Mot de passe"
          v-model="password"
        />
        <div>
          <input
            class="btn-main"
            type="button"
            @click="login"
            value="Valider"
          />
          <p class="error-msg" v-if="msg">{{ msg }}</p>
        </div>
      </div>
    </form>
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
      credentials: [],
    };
  },
  methods: {
    async login() {
      try {
        this.credentials.push(this.email, this.password);
        console.log(this.credentials);
        const response = await AuthService.login(this.credentials);
        console.log(response);
        const token = response.token;
        const user = response.user;

        this.$store.dispatch("login", { token, user });
        this.$router.push("/");
      } catch (error) {
        this.credentials = [];
        console.log(error.response.data);
        this.msg = error.response.data.error;
      }
    },
  },
};
</script>

<style>
h1 {
  font-size: 2rem;
}
form {
  margin-top: 30px;
}

.form-group {
  display: grid;
  margin: auto;
  width: 400px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);
  border-radius: 16px;
  padding: 80px;
  background-color: #ffffff;
}

.form-item {
  margin: 10px;
  border-radius: 6px;
  border: 1px solid grey;
  padding: 8px;
  background-color: #f8f8f8;
}
</style>
