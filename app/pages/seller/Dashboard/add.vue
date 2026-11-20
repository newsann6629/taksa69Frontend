<template>
    <div class="flex justify-center items-center w-screen h-screen">
        <div class="">
            <div class="">
                <div class="flex justify-center card border-t-green-600 border-2 w-full">
                <label for="" class="font-bold text-3xl">เพิ่มหนังสือ</label>
            </div>

            <div class="card mt-2 border-t-green-600 border-2">
                <form action="" @submit.prevent="Sell_Book(data)">
                    <div>
                        <input type="text" name="" id="" v-model="data.book_name" class="input w-full" placeholder="ชื่อหนังสือ" required>
                    </div>
                    <div>
                        <select name="" id="" v-model="data.tag" class="input w-full" placeholder="เลือกประเภทหนังสือ" required>
                            <option :value="Tags.tag_id" v-for="Tags in tag" :key="Tags.tag_id">{{ Tags.tag }}</option>
                            <!-- <option value="">------เลือกประเภทหนังสือ------</option>
                            <option value="1">romance</option>
                            <option value="2">slide of life</option>
                            <option value="3">comady</option> -->
                        </select>
                    </div>
                    <div class="mt-2">
                        <input type="file" name="" id="" class="input" placeholder="รูปปก" @change="data.file = $event.target.files[0]">
                    </div>
                    <div>
                        <input type="number" name="" id="" v-model="data.price" class="input w-full" placeholder="ราคา" required>
                    </div>

                    <div class="">
                        <div class="">
                            <button type="submit" class="btn-green w-full" >บันทึก</button>
                        </div>
                    </div>

                </form>
            </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Seller_Api } from '#imports';
import { Middle_Api } from '#imports';

const { Get_Tag } = Middle_Api()
const { Sell_Book } = Seller_Api()

const tag = ref([""])
const data = ref({
    book_name: "",
    price: "",
    tag: "",
    file: null
})


onMounted(async (params) => {
    tag.value = await Get_Tag()
})
</script>

<style lang="scss" scoped>

</style>