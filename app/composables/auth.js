import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "vue-router";
import { api } from "#imports";

export const Auth = () => {

    const go = useRouter()
    const http = api()

    const login = async (params) => {
        try {
            const res = await http.post('auth/login',params)

            localStorage.setItem('token',res.data.Authorization)
            const decode = jwtDecode(localStorage.getItem('token'))

            if(decode.role == 1) go.push('admin/Dashboard/')
            else if (decode.role == 2) go.push('seller/Dashboard/')
            else if (decode.role == 3) go.push('user/Dashboard/')
            else alert('Something Went wrong')

        } catch (error) {
            console.log(error)
            // console.log(error.response?.data?.message)
        }
    }

    const register = async (params) => {
        try {
            const res = await http.post('auth/register',params)
        } catch (error) {
            console.log(error)
        }
    }

    return{
        login,
        register,
    }
}