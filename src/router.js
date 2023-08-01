import Router from "vue-router";
import ProductsList from "./components/ProductsList";
import ProductsItem from "./components/ProductsItem";
import AddProduct from "./components/AddProduct";

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
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
