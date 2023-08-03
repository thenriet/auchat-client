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

  create(data, token) {
    return http.post(
      "/products",
      {
        title: data[0],
        description: data[1],
        price: data[2],
        weight: data[3],
        category: data[4],
      },
      {
        headers: {
          authorization: "Bearer " + token,
        },
      }
    );
  }

  update(id, data) {
    return http.put(`/products/${id}`, data);
  }

  delete(id, token) {
    return http.delete(`/products/${id}`, {
      headers: {
        authorization: "Bearer " + token,
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
