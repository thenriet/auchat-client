import { AxiosHeaders } from "axios";
import http from "../http-common";

class ProductsDataService {
  getAll() {
    return http.get("/products");
  }

  getAllToys() {
    return http.get("/products?category=toys");
  }

  get(id) {
    return http.get(`/products/${id}`);
  }

  create(data) {
    return http.post("/products", data);
  }

  update(id, data) {
    return http.put(`/products/${id}`, data);
  }

  delete(id) {
    return http.delete(`/products/${id}`, {
      headers: {
        authorization: "Bearer " + this.$store.getters.isLoggedIn,
      },
    });
  }

  //   deleteAll() {
  //     return http.delete(`/tutorials`);
  //   }

  //   findByTitle(title) {
  //     return http.get(`/tutorials?title=${title}`);
  //   }
}

export default new ProductsDataService();
