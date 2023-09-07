import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import * as types from "./mutation-types";
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
      // // console.log(state.added);
      // return state.added, quantity;
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
      // console.log(payload);
      // const record = state.added.find((payload) => payload === payload);
      // if (!record) {
      //   state.added.push({
      //     payload,
      //     quantity: 1,
      //   });
      // } else {
      //   record.quantity++;
      // }
      state.added.push(payload);
    },
    removeFromCart(state, p) {
      state.added.splice(p, 1);
    },
    // [types.ADD_TO_CART](state, { id }) {
    //   const record = state.added.find((p) => p.id === id);
    //   if (!record) {
    //     state.added.push({
    //       id,
    //       quantity: 1,
    //     });
    //   } else {
    //     record.quantity++;
    //   }
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
      // },
      // addToCart({ commit }, product) {
      //   commit(types.ADD_TO_CART, {
      //     id: product._id,
      //   });
    },
  },
});
