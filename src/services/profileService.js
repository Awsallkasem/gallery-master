import http from "./httpService";
import { apiUrl } from "../config.json";
import { getJwt } from "./authService";
import logService from "./logService";

const apiEndpoint = apiUrl + "/admin/";
const tokenKey = "token";

http.setJwt(getJwt());

export async function updateprofile(formDate, user, file) {
  let newData = new FormData();

  if (formDate.name.toLowerCase() !== user.name.toLowerCase()) {
    newData.append("name", formDate.name);
  }
  if (formDate.email.toLowerCase() !== user.email.toLowerCase()) {
    newData.append("email", formDate.email);
  }
  if (file) {
    newData.append("image", file);
  }
  if (formDate.password !== "") {
    newData.append("password", formDate.password);
  }
  const { data } = await http.post(apiEndpoint + "edit", newData);
  return data.result[0];
}

export async function getArtistProfile(artistId) {
  const { data } = await http.post(
    `http://127.0.0.1:8000/api/show/artist/${artistId}`
  );
  return data.result[0];
}
export async function getArtistWork(artistId) {
  const { data } = await http.post(
    `http://127.0.0.1:8000/api/paintings/artist/show/${artistId}`
  );
  return data.result[0];
}

export default {
  updateprofile,
  getArtistProfile,
  getArtistWork,
};
