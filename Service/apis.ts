import axios from "axios";
import { API_KEY } from "@env";

const baseURL = "https://api.themoviedb.org/3/movie";
const lang = "en-US";

const client = axios.create({
  baseURL: baseURL,
  headers: {
    Accept: "application/json,",
    Authorization: `Bearer ${API_KEY}`,
  },
});

export const apis = {
  getNowPlaying: () =>
    client({
      method: "GET",
      url: `3/movie/now_playing?language=${lang}&page=1`,
    }),
};
