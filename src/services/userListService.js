import http from "./httpService";
import { apiUrl } from "../config.json";
import { getJwt } from "./authService";
import logService from "./logService";

const apiEndpoint = apiUrl + "/query/";
const tokenKey = "token";

http.setJwt(getJwt());
export async function getUserList() {
  const  {data}  = await http.post(apiEndpoint + "user");
  return (data.result[0]);
}

export async function searchAboutUser(userName) {
    const  {data}  = await http.post(apiEndpoint + `user?exact[name]=${userName}`);
    return (data.result[0]);
  }
  
export default {
  getUserList,
  searchAboutUser
};
