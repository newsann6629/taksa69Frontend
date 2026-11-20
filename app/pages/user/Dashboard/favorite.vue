<template>
    <div class="grid grid-cols-4 gap-2">
        <div v-for="bks,i in data" :key="bks.book_id">
            <div class="card hover:bg-black/20 mt-2 border-t-orange-600 border-2 items-center">
                <div>
                    <label for="" class="font-bold text-2xl">{{ i + 1 }}.</label>
                    <label for="">{{ bks.book_name }}</label>
                </div>
                <div>
                    <label for="" class="font-bold">ชื่อผู้เขียน : </label>
                    <label for="">{{ bks.username }}</label>
                </div>
                <div>
                    <label for="" class="font-bold">ประเภทหนังสือ : </label>
                    <label for="">{{ bks.tag }}</label>
                </div>
                <div>
                    <label for="" class="font-bold">ราคา : </label>
                    <label for="" class="font-bold text-orange-700">{{ bks.book_price }}</label>
                </div>
                <div class="flex justify-center items-center">
                    <img :src="ip + bks.book_cover" class="w-2/4 p-2" alt="" srcset="">
                </div>

                <div>
                    <button type="submit" class="btn-green w-full p-2" @click="Buy_Book(bks.book_id)">ซื้อ</button>
                </div>
                <div class="mt-2">
                    <button type="button" class="btn-red w-full" @click="Rm_Fav(bks.book_id)">ลบออกจากหนังสือที่ชอบ</button>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
import { Middle_Api } from '#imports';
import { Buyer_Api } from '#imports';

const data = ref([""])
const ip = "http://192.168.88.165:5000/images/"
const { Get_Fav,Rm_Fav } = Middle_Api()


onMounted(async (params) => {
    // data.value = await Get_Fav()
    data.value = (await lazy.get('customer/favorite')).data.data
    console.log(data.value)
})
</script>

<style lang="scss" scoped>

</style>