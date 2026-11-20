import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { api } from "#imports";

export const Seller_Api = () => {

    const http = api()

    const Sell_Book = async (params) => {


        const fd = new FormData()

        fd.append('book_name',params.book_name)
        fd.append('tag',params.tag)
        fd.append('file',params.file)
        fd.append('book_price',params.price)

        try {
            const res = await http.post('auther/book',fd)

            alert(res.data.message)
        } catch (error) {
            console.log(error)
        }
    }

    const Edit_Book = async (params) => {

        const fd = new FormData()

        fd.append('book_name',params.name)
        fd.append('tag',params.tag)
        fd.append('book_price',params.price)

        if(params.file) fd.append('file',params.file)

        try {
            const res = await http.put(`auther/book/${params.book_id}`,fd)
            alert(res.data.message)
            window.location.reload()
        } catch (error) {
            alert(error.response?.data?.message)
            console.log(error)
        }
    }

    const Rm_Book = async (params) => {
        try {
            const res = await http.delete(`auther/book/${params}`)
            alert(res.data.message)
            window.location.reload()
        } catch (error) {
            console.log(error)
        }
    }
    

    return {
        Rm_Book,
        Sell_Book,
        Edit_Book,
    }
}