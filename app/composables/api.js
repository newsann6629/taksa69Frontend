import axios from "axios";

export const api = () =>{


    return axios.create({
        baseURL: "http://192.168.88.165:5000/api/",
        headers: {
            Authorization: import.meta.client ? `Bearer ${localStorage.getItem('token') ?? "" }` : ""
        }
    })
}