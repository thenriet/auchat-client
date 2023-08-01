import Router from "vue-router";
import HomePage from "./components/HomePage";

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: HomePage,
    },
    {
      path: "/products/:id",
      name: "products-details",
      component: () => import("./components/ProductItem"),
    },
    {
      path: "/add",
      name: "add",
      component: () => import("./components/AddProduct"),
    },
  ],
});
