import http from "./httpService";
import { apiUrl } from "../config.json";
import { getJwt } from "./authService";

const apiEndpoint = apiUrl + "/certificate/";
const tokenKey = "token";

http.setJwt(getJwt());

export async function getAllcertificate() {
  const { data } = await http.get(apiEndpoint + "showAll");
  return data.result[0];
}
export async function getcertificateDetails(certificateId) {
  const { data } = await http.post(apiEndpoint + `show/${certificateId}`);
  return data.result[0];
}
export async function acceptcertificate(certificateId) {
  const { data } = await http.post(apiEndpoint + `accept/${certificateId}`);
  return data.success;
}
export async function rejectcertificate(certificateId) {
  const { data } = await http.post(apiEndpoint + `reject/${certificateId}`);
  return data.success;
}
export default {
  getAllcertificate,
  getcertificateDetails,
  acceptcertificate,
  rejectcertificate,
};
