<template>

    <div class="grid grid-cols-4 gap-2">
        <div v-for="bks,i in book" :key="bks.book_id">
            <div class="card hover:bg-black/20 mt-2 border-t-green-600 border-2 items-center">
                <div>
                    <label for="" class="font-bold text-2xl">{{ i + 1 }}.</label>
                    <label for="">{{ bks.book_name }}</label>
                </div>
                <div>
                    <label for="" class="font-bold">ประเภทหนังสือ : </label>
                    <label for="">{{ bks.tag }}</label>
                </div>
                <div class="flex justify-center items-center">
                    <img :src="ip + bks.book_cover" class="w-2/4 p-2" alt="" srcset="">
                </div>

                <div>
                    <label for="" class="text-green-600">{{ bks.book_price }} บาท.</label>
                </div>

                <div>
                    <div v-if="bks.book_status == 'inactive'">
                        <button type="button" class="btn-yellow w-full" disabled>กำลังรอการอนุญาต</button>
                    </div>
                    <div v-if="bks.book_status == 'active'">
                        <button type="button" class="btn-green w-full" disabled>หนังสือวางขายแล้ว</button>
                    </div>
                </div>

                <div>
                    <button type="button" class="btn-green w-full" @click="model = bks.book_id">แก้ไขหนังสือ</button>
                </div>
                <div>
                    <button type="button" class="btn-red w-full" @click="Rm_Book(bks.book_id)">ลบหนังสือ</button>
                </div>

                <div v-if="model === bks.book_id">
                    <div class="fixed inset-0 bg-black/50">
                        <div class="flex justify-center w-full h-full items-center">
                            <div class="bg-white rounded-md shadow-lg p-2 w-2/3">
                                
                                <form action="" @submit.prevent="Edit_Book(data)">

                                    <div>
                                    <label for="" class="font-bold">ชื่อหนังสือ</label>
                                    <input type="text" v-model="data.name" :placeholder="bks.book_name" name="" id="" class="input w-full">
                                </div>

                                <input type="hidden" :value="data.book_id = bks.book_id" name="">

                                <div>
                                    <label for="" class="font-bold">ประเภทหนังสือ</label>
                                    <select name="" id="" v-model="data.tag" class="input w-full">
                                        <option :value="Tags.tag_id" v-for="Tags in tag" :key="Tags.tag_id">{{ Tags.tag }}</option>
                                    </select>
                                </div>
                                <div>
                                    <label for="" class="font-bold">รูปปก</label>
                                    <input type="file" name="" class="input w-full" id="" @change="data.file = $event.target.files[0]">
                                </div>
                                <div>
                                    <label for="" class="font-bold">ราคา</label>
                                    <input type="number" v-model="data.price" :placeholder="bks.book_price + ' บาท'" name="" id="" class="input w-full">
                                </div>


                                <div class="grid grid-cols-2 gap-2">
                                    <div>
                                        <button type="submit" class="btn-green w-full">บันทึก</button>
                                    </div>
                                    <div>
                                        <button type="button" class="btn-red w-full" @click="model = null">Close</button>
                                    </div>
                                </div>

                                </form>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
import { Middle_Api } from '#imports';
import { Seller_Api } from '#imports';

const ip = "http://192.168.88.165:5000/images/"

const model = ref(null)
const book = ref([""])
const tag = ref([""])


const { Edit_Book,Rm_Book } = Seller_Api()
const { Get_book,Get_Tag } = Middle_Api()

const data = ({
    book_id:"",
    name: "",
    price: "",
    tag: "",
    file: null,
})

onMounted(async (params) => {
    book.value = await Get_book()
    tag.value = await Get_Tag()
    console.log(book.value)
})

</script>

<style lang="scss" scoped>


</style>