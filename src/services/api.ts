import axios from "axios";

const BASE_URL = "https://api.github.com";

const headers: HeadersInit = {
  Accept: "application/vnd.github+json",
};

export const api = axios.create({
  baseURL: BASE_URL,
  headers,
});
