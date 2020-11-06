
import http from "./httpService";
import { apiUrl, deployedApiUrl } from "../config.json";

export function getWaitList() {
  return http.get(apiUrl + "/waitlists");
}

export function emptyWaitList() {
  return http.delete(apiUrl + "/waitlists");
}