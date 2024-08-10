import http from "./httpService";
import { apiUrl } from "../config.json";
import { getJwt } from "./authService";

const apiEndpoint = apiUrl + "/complaint/";
const tokenKey = "token";

http.setJwt(getJwt());

export async function getAllComplaint() {
  const { data } = await http.get(apiEndpoint + "showAll");
  return data.result[0];
}
export async function getComplaintDetails(complaintId) {
  const { data } = await http.post(apiEndpoint + `show/${complaintId}`);
  return data.result[0];
}
export async function acceptComplaint(compaintId) {
  const { data } = await http.post(apiEndpoint + `accept/${compaintId}`);
  return data.success;
}
export async function rejectComplaint(compaintId) {
  const { data } = await http.post(apiEndpoint + `reject/${compaintId}`);
  return data.success;
}
export default {
  getAllComplaint,
  getComplaintDetails,
  acceptComplaint,
  rejectComplaint,
};
