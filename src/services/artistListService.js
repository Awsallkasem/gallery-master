import http from "./httpService";
import { apiUrl } from "../config.json";
import { getJwt } from "./authService";
import logService from "./logService";

const apiEndpoint = apiUrl + "/query/";
const tokenKey = "token";

http.setJwt(getJwt());
export async function getArtistList() {
  const { data } = await http.post(apiEndpoint + "artist");
  return data.result[0];
}

export async function searchAboutArtist(artistname) {


  const { data } = await http.post(
    apiEndpoint + `artist?exact[name]=${artistname}`
  );
  return data.result[0];
}

export async function getArts() {
  const { data } = await http.post(apiEndpoint + "painting");
  return data.result[0];
}

export default {
  getArtistList,
  searchAboutArtist,
  getArts
};
