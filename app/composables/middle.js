import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { api } from "#imports";
import { useRouter } from "vue-router";

export const Middle_Api = () => {
    const go = useRouter()
    const http = api()


    const rn = async (params) => {
        try {
            const user = ({
                1: "admin",
                2: "auther",
                3: "customer"
            })

            const token = import.meta.client ? localStorage.getItem('token') ?? null : ""
            const decode = jwtDecode(token)

            return user[decode.role]
        } catch (error) {
            console.log(error)
        }
    }

    const Get_book = async (params) => {
        try {
            const role = await rn()
            const res = await http.get(`/${role}/books`)

            return res.data.data
        } catch (error) {
            console.log(error)
        }
    }

    const Get_Profile = async (params) => {
        try {
            const role = await rn()
            const res = await http(`${role}/`)
        } catch (error) {
            console.log(error)
        }
    }

    const Edit_Profile = async (params) => {
        try {
            const role = await rn()
            const res = await http.put(`${role}/`)
        } catch (error) {
            console.log(error)
        }
    }

    const logout = async (params) => {
        try {
            localStorage.removeItem('token')        
            go.push('/')
        } catch (error) {
            console.log(error)
        }
    }

    const Fav_Book = async (params) => {
            const role = await rn()
        try {
            const res = await http.post(`${role}/favorite/${params}`)
            alert(res.data.message)
            window.location.reload()
        } catch (error) {
            alert(error.response?.data?.message)
            console.log(error)
        }
    }

    const Rm_Fav = async (params) => {
        const role = await rn()
        try {
            const res = await http.delete(`${role}/favorite/${params}`)
            alert(res.data.message)
            window.location.reload()
        } catch (error) {
            console.log(error)
        }
    }

    const Get_Fav = async (params) => {
        const decode = jwtDecode(localStorage.getItem('token'))
        const role = await rn()
        try {
            const res = await http(`${role}/favorite/${decode.id}`)

            return res.data.data
        } catch (error) {
            console.log(error)
        }
    }

    const Get_Tag = async (params) => {
        const role = await rn()
        try {
            const res = await http(`${role}/tag`)

            return res.data.data
        } catch (error) {
            alert(error.response?.data?.message)
        }
    }

    return {
        Get_Tag,
        Get_Fav,
        Rm_Fav,
        Fav_Book,
        logout,
        Edit_Profile,
        Get_book,
        Get_Profile,
    }
}