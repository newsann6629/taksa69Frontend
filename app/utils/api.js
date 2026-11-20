import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const lazy = axios.create ({
    baseURL: "http://192.168.88.165:5000/api/",
    headers: {
        Authorization: import.meta.client ? `Bearer ${localStorage.getItem('token') ?? ''}` : ''
    }
})

export const role = async (params) => {
    try {
        if(!import.meta.client) return null
        const decode = jwtDecode(localStorage.getItem('token'))

        return decode.role
    } catch (error) {
        return null
    }
}