import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { api } from "#imports";


export const Buyer_Api = () => {

    const http = api()

    const Buy_Book = async (params) => {


        try {
            const res = await http.post(`customer/book/${params}`)
            alert(res.data.message)
            window.location.reload()
        } catch (error) {
            alert(error.response?.data?.message)
            console.log(error)
        }
    }

    return {
        Buy_Book,
    }
}