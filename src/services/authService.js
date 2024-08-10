import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/admin/login";
const tokenKey = "token";

http.setJwt(getJwt());

export async function login(email, password) {
  const { data } = await http.post(apiEndpoint, { email, password });
  localStorage.setItem(tokenKey, data.result[0].token);
  localStorage.setItem("user", JSON.stringify(data.result[0]));
  return;
}

export function logout() {
  localStorage.removeItem(tokenKey);
  localStorage.removeItem("user");
}

export function getCurrentUser() {
  let user = localStorage.getItem("user");
  user = JSON.parse(user);
  return user;
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

export default {
  login,

  logout,
  getCurrentUser,
  getJwt,
};
