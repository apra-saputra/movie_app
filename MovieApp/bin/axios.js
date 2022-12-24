import axios from "axios";

export const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: { api_key: "80d7b2d237b50df3763505c875c53259" },
});
