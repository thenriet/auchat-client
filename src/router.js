import Router from "vue-router";
import HomePage from "./components/HomePage";
import ProductsItem from "./components/ProductsItem";
import ProductsList from "./components/ProductsList";
import AddProduct from "./components/AddProduct";
import LoginPage from "./components/LoginPage";
import UpdateProduct from "./components/UpdateProduct";
import Cart from "./components/Cart";
import Store from "./store";

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/products",
      name: "products",
      component: ProductsList,
    },
    {
      path: "/products/:id",
      name: "products-item",
      component: ProductsItem,
      props: true,
    },
    {
      path: "/add",
      name: "add",
      component: AddProduct,
      beforeEnter: (to, from, next) => {
        if (Store.getters.getRole !== "admin") {
          next("/login");
        } else next();
      },
    },
    {
      path: "/update/:id",
      name: "update-product",
      component: UpdateProduct,
    },
    {
      path: "/login",
      name: "login",
      component: LoginPage,
    },
    { path: "/cart", component: Cart },
  ],
});
