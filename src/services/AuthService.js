import http from "../http-common";

class AuthService {
  login(credentials) {
    return http
      .post("auth/login", credentials)
      .then((response) => response.data);
  }
}

export default new AuthService();
