import axios from "axios";

export const api = axios.create({
    baseURL: "https://hero-app-ts.herokuapp.com/api/"
})