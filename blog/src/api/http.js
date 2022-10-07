import axios from "axios";
const baseURL = "https://newsapi.org/v2"
const http = axios.create({
    baseURL:baseURL
})
export default http;