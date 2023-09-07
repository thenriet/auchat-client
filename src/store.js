import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import ProductsDataService from "./services/ProductsDataService";
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);
const getDefaultState = () => {
  return {
    token: "",
    user: {},
    added: [],
    products: [],
  };
};

export default new Vuex.Store({
  strict: true,
  plugins: [createPersistedState()],
  state: getDefaultState(),
  getters: {
    isLoggedIn: (state) => {
      return state.token;
    },
    getUser: (state) => {
      return state.user;
    },
    getRole: (state) => {
      return state.user.role;
    },
    allProducts: (state) => state.products,
    getNumberOfProducts: (state) =>
      state.products ? state.products.length : 0,
    cartProducts: (state) => {
      return state.added;
    },
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_USER: (state, user) => {
      state.user = user;
    },
    RESET: (state) => {
      Object.assign(state, getDefaultState());
    },
    addToCart(state, payload) {
      state.added.push(payload);
    },
    removeFromCart(state, p) {
      state.added.splice(p, 1);
    },

    setProducts(state, payload) {
      state.products = payload;
    },
  },
  actions: {
    async getProducts(state) {
      try {
        let res = await ProductsDataService.getAll();
        const prods = await res.data.data;
        state.commit("setProducts", prods);
      } catch (err) {
        console.log(err);
      }
    },
    login: ({ commit, dispatch }, { token, user }) => {
      commit("SET_TOKEN", token);
      commit("SET_USER", user);
      // set auth header
      Axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    },
    logout: ({ commit }) => {
      commit("RESET", "");
    },
  },
});
