<template>
    <select name="" id="" class="input" v-model="SelectTag">
        <option value="ทั้งหมด">ทั้งหมด</option>
        <option :value="Stag.tag" v-for="Stag in Tag" :key="Stag.tag_id">{{ Stag.tag_id }}</option>
    </select>

    <div v-for="bks in FB" :key="bks.book_id">
        <div>
            {{ bks.book_id }}
        </div>
    </div>
</template>

<script setup>
import { Middle_Api } from '#imports';
import { Buyer_Api } from '#imports';

const ip = "http://192.168.20.18:5000/images/"

const book = ref([""])

const { Get_book,Fav_Book,Get_Tag } = Middle_Api()

const Tag = ref([""])
const SelectTag = ref("")

const FB = computed(() => {

    if(SelectTag.value === 'ทั้งหมด') return book.value

    return book.value.filter(bks => 
        bks.tag === SelectTag.value
    )
})

onMounted(async (params) => {
    book.value = await Get_book()
    Tag.value = await Get_Tag()
    console.log(Tag.value)
})

</script>

<style lang="scss" scoped>


</style>