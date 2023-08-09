import http from "../http-common";

class AuthService {
  login(credentials) {
    return http
      .post("auth/login", {
        email: credentials[0],
        password: credentials[1],
      })
      .then((response) => response.data);
  }
}

export default new AuthService();
