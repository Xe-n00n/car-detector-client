import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:8000/",
    headers: {
        'Accept':'application/json',
        'Content-Type':'application/json',
    }
})

export default API;