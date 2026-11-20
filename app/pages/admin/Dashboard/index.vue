<template>

    <div v-if="book.length >0">

        <div class="grid grid-cols-4 gap-2">

            <div v-for="bks,i in book" :key="bks.book_id">
            <div class="card hover:bg-black/20 mt-2 border-t-blue-600 border-2 items-center">
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
                <div class="flex justify-center items-center">
                    <img :src="ip + bks.book_cover" class="w-2/4 p-2" alt="" srcset="">
                </div>

                <div>
                    <button type="button" v-if="bks.book_status === 'inactive'" class="btn-green w-full" @click="Accept_Book(bks.book_id)">อนุญาต</button>
                    <button type="button" v-if="bks.book_status === 'active'" class="btn-yellow w-full" @click="Unaccept_Book(bks.book_id)">ปลดอนุญาต</button>
                </div>
                <!-- <div>
                    <button type="button" class="btn-red w-full" @click="Unaccept_Book(bks.book_id)">ไม่อนุญาต</button>
                </div> -->
                <div>
                    <button type="button" class="btn-red w-full" @click="Delete_Book(bks.book_id)">ลบหนังสือ</button>
                </div>
            </div>
                </div>

    </div>

    </div>

    <div v-if="book.length <= 0">

        NO BOOK DATA

    </div>

</template>

<script setup>
import { Admin_api } from '#imports'

const ip = "http://192.168.88.165:5000/images/"

const book = ref([""])
const { Get_UnAccept_Book,Unaccept_Book,Accept_Book,Delete_Book } = Admin_api()

onMounted(async (params) => {
    // book.value = await Get_UnAccept_Book()
    // book.value = (await lazy.get('admin/book')).then(res => res.data.data).catch(() => "")
    book.value = (await lazy.get('admin/books')).data.data
})

</script>

<style lang="scss" scoped>


</style>