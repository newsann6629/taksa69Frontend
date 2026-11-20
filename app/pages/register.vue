<template>
    <div class="w-screen h-screen bg-orange-300">
        <div class="flex justify-center items-center h-full">
            <form action="" class="" @submit.prevent="register(data)">
                <div class="card">
                <div class="flex justify-center">
                    <label for="" class="font-bold text-3xl">Register</label>
                </div>
                <div>
                    <input type="text" class="input-orange" v-model="data.username" placeholder="username" required>
                </div>
                <div>
                    <input type="email" class="input-orange" v-model="data.email" placeholder="email" required>
                </div>
                <div>
                    <select name="" id="" v-model="data.role" class="input-orange w-full" required>
                        <option value="3">ผู้ซื้อ</option>
                        <option value="2">ผู้ขาย</option>
                    </select>
                </div>
                <div>
                    <input type="password" class="input-orange" v-model="data.password" placeholder="password" required>
                </div>
                <div>
                    <button type="submit" class="btn-orange w-full">เช้าสู่ระบบ</button>
                </div>
                <label for="">มีบัญชี ? <nuxt-link to="/" class="text-orange-500">Click</nuxt-link></label>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { Auth } from '#imports';

const { login,register } = Auth()

const data = ref({
    role: 0,
    email: "",
    username: "",
    password: "",
})


</script>

<style lang="scss" scoped>

</style>