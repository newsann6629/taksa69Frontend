<template>
    <div class="flex justify-end p-2 w-full">
        <select name="" id="" class="input" v-model="SelectTag">
            <option value="all">ทั้งหมด</option>
            <option :value="Stag.tag" v-for="Stag in Tag" :key="Stag.tag_id">{{ Stag.tag }}</option>
        </select>
    </div>
    <div class="grid grid-cols-4 gap-2">


        <div v-for="bks,i in FB" :key="bks.book_id">
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
                <!-- <div>
                    <label for="" class="font-bold">ราคา : </label>
                    <label for="" class="font-bold text-orange-700">{{ bks.book_price }}</label>
                </div> -->
                <div class="flex justify-center items-center">
                    <img :src="ip + bks.book_cover" class="w-2/4 p-2" alt="" srcset="">
                </div>

                <div class="mt-2">
                    <button type="button" class="btn-yellow w-full" @click="Fav_Book(bks.book_id)">ชอบหนังสือ</button>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
import { Middle_Api } from '#imports';
import { Buyer_Api } from '#imports';

const ip = "http://192.168.88.165:5000/images/"

const book = ref([])

const { Get_book,Fav_Book,Get_Tag } = Middle_Api()
const { Buy_Book } = Buyer_Api()

const Tag = ref([""])
const SelectTag = ref("all")

const FB = computed(() => {

    if(SelectTag.value === 'all') return book.value

    return book.value.filter(bks => 
        bks.tag === SelectTag.value
    )
})

onMounted(async (params) => {
    // book.value = await Get_book()
    book.value = (await lazy('customer/owned')).data.data || ""
    Tag.value = await Get_Tag()
})

</script>

<style lang="scss" scoped>


</style>