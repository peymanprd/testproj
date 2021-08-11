<template>
    <nav class="bg-light py-3 mb-4 border-b-1">
        <Container>
            <BaseButton @doEvent="salamKon">ثبت نام</BaseButton>
            <BaseInput format="currency"></BaseInput>
        </Container>
    </nav>
    {{ isBarcode }}
    <button
        @click="isBarcode = !isBarcode"
        class="
            py-3
            px-6
            bg-green-700
            rounded-full
            text-white
            hover:bg-gray-800
            mr-8
        "
    >
        بارکدخوان
    </button>
    <div v-if="isBarcode" class="px-8 py-4 mx-4 my-4 rounded bg-blue-300">
        Barcode is Run Bitchesssssssss!!!!!
    </div>
    <template v-if="isBarcode">
        <StreamBarcodeReader @loaded="onLoaded" @decode="onDecode">
        </StreamBarcodeReader>
    </template>
    <Test></Test>
</template>

<script>
import { ref, reactive, toRefs } from 'vue'
import Container from './base/Container.vue'
import BaseButton from './base/Button.vue'
import BaseInput from './base/Input.vue'
import Test from './base/Test.vue'
import { StreamBarcodeReader } from 'vue-barcode-reader'

export default {
    name: '',
    components: { Container, BaseButton, BaseInput, Test, StreamBarcodeReader },
    setup() {
        const barcode = reactive({
            barcodeValue: null,
            isBarcode: false,
            salamKon: () => console.log('salam kon pesar!'),
            onDecode: (result) => console.log('نتیجه اسکن : ' + result),
            onLoaded: () => console.log('load mikone!'),
        })

        return { ...toRefs(barcode) }
    },
}
</script>
