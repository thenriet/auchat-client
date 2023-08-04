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
    // for (let [name, value] of data) {
    //   console.log(`${name} = ${value}`);
    // }
    return http.post(
      "/products",
      {
        data: data,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
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
