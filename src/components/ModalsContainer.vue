<template>
    <vue-final-modal v-model="isField" classes="modal-container" content-class="mw-25 modal-content overflow-scroll">
        <div><img :src="imgUrl" /></div>
    </vue-final-modal>
</template>
<script setup lang="ts">
import { ref, defineExpose } from 'vue'

const isField = ref(false)
const imgUrl = ref()


const showView = async (url:any) => {
    isField.value = true
    imgUrl.value = url
    console.log("ksdfjhkhfdsk")
}

defineExpose({ showView })

</script>