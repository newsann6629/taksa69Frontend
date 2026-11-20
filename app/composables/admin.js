import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "vue-router";
import { api } from "#imports";

export const Admin_api = () => {

    const http = api()

    const Edit_Book = async (params) => {
        try {
            const res = await http.put(``,)
        } catch (error) {
            console.log(error)
        }
    }

    const Add_book = async (params) => {
        try {
            const res = await http.post('book',params)
        } catch (error) {
            console.log(error)
        }
    }

    const Delete_Book = async (params) => {
        try {
            const res = await http.delete(`admin/book/${params}`)
            alert(res.data.message)
            window.location.reload()
        } catch (error) {
            console.log(error)
        }
    }

    const Accept_Book = async (params) => {
        try {
            const res = await http.put(`admin/active/${params}`)
            alert(res.data.message)
            window.location.reload()
        } catch (error) {
            alert(error.response?.data?.message)
        }
    }

    const Unaccept_Book = async (params) => {
        try {
            const res = await http.put(`admin/inactive/${params}`)
            alert(res.data.message)
            window.location.reload()
        } catch (error) {
            alert(error.response?.data?.message)
        }
    }

    const Get_UnAccept_Book = async (params) => {
        try {
            const res = await http('admin/accept')
        } catch (error) {
            alert(error.response?.data?.message)
        }
    }

    

    return {
        Unaccept_Book,
        Get_UnAccept_Book,
        Accept_Book,
        Delete_Book,
        Edit_Book,
        Add_book,
    }
}