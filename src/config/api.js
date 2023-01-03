import { Axios } from "axios";

export const API = Axios.create({
  baseUrl: "https://reqres.in/",
});
