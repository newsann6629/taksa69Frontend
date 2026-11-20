<template>
    <div class="w-screen h-screen bg-orange-300">
        <div class="flex justify-center items-center h-full">
            <form action="" @submit.prevent="login(data)" class="w-[20rem]">
                <div class="card">
                    <div class="flex justify-center">
                        <label for="" class="font-bold text-3xl">Login</label>
                    </div>
                    <div>
                        <input type="text" class="input-orange" v-model="data.username" placeholder="username">
                    </div>
                    <div>
                        <input type="password" class="input-orange" v-model="data.password" placeholder="password">
                    </div>
                    <div>
                        <button type="submit" class="btn-orange w-full">เช้าสู่ระบบ</button>
                    </div>
                    <label for="">ไม่มีบัญชี ? <nuxt-link to="/register" class="text-orange-500">Click</nuxt-link></label>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { Auth } from '#imports';

const { login } = Auth()

const data = ref({
    username: "",
    password: "",
})


</script>

<style lang="scss" scoped>

</style>