import http from "./httpService";
import { apiUrl, deployedApiUrl } from "../config.json";

export function getWaitList() {
  return http.get(deployedApiUrl + "/waitLists");
}

export function emptyWaitList() {
  return http.delete(deployedApiUrl + "/waitLists");
}