<template>
    <div class="bg-blue-500 flex justify-end sticky top-0">

        <div class="flex justify-center items-center p-2">
            <nuxt-link to="/admin/Dashboard/" class="text-white">Home</nuxt-link>
        </div>

        <div class="relative">
            <img src="./../../img/default.jpg" class="w-[5rem] p-2 rounded-full" @click="Pop = !Pop" alt="">
            <div v-if="Pop" class="absolute right-0 top-full p-3">
                
                <div class="block bg-white shadow-lg p-2 rounded-md">
                    <div>
                        <button type="button" class="btn-orange w-full" @click="Model = !Model">proile</button>
                    </div>
                    <div>
                        <button type="button" class="btn-red w-full" @click="logout()">Logout</button>
                    </div>
                </div>

            </div>
        </div>

    </div>

    <div v-if="Model" class="">
        <div class="fixed flex inset-0 justify-center items-center w-screen h-screen bg-black/50">

            <div class="card">

                What ever profile

                <div class="">
                    <form action="" @submit.prevent="" class="grid grid-cols-2 gap-2">
                        <div>
                            <button type="button" class="btn-green w-full">Save</button>
                        </div>
                        <div>
                            <button type="button" class="btn-red w-full" @click="Model = !Model">Close</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    </div>

    <NuxtPage />
</template>

<script setup>
import { Middle_Api } from '#imports';
const Pop = ref(false)
const Model = ref(false)

const { logout } = Middle_Api()

</script>

<style lang="scss" scoped>

</style>