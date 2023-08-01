import Router from "vue-router";
import HomePage from "./components/HomePage";
import ProductsItem from "./components/ProductsItem";
import ProductsList from "./components/ProductsList";
import AddProduct from "./components/AddProduct";

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: HomePage,
    }
    {
      path: "/products",
      alias: "/products",
      name: "products",
      component: ProductsList,
    },
    {
      path: "/products/:id",
      name: "products-item",
      component: ProductsItem,
    },
    {
      path: "/add",
      name: "add",
      component: AddProduct,
    },
  ],
});
