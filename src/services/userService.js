import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/admin/login";

export function login(user) {
  return http.post(apiEndpoint, {
    email: user.email,
    password: user.password,
  });
}
