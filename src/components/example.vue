<template>
    <nav class="bg-light py-3 my-4 border-b-1">
        <Container>
            <BaseButton @doEvent="salamKon">ثبت نام</BaseButton>
            <BaseInput></BaseInput>
        </Container>
    </nav>
    <button
        @click="isBarcode = !isBarcode"
        class="py-3 px-6 bg-gray-700 rounded-full text-white hover:bg-gray-800"
    >
        بارکدخوان
    </button>
    <template v-if="isBarcode">
        <StreamBarcodeReader @loaded="onLoaded" @decode="onDecode">
        </StreamBarcodeReader>
    </template>
</template>

<script>
import { ref } from 'vue'
import Container from './base/Container.vue'
import BaseButton from './base/Button.vue'
import BaseInput from './base/Input.vue'
import { StreamBarcodeReader } from 'vue-barcode-reader'

export default {
    components: { Container, BaseButton, BaseInput, StreamBarcodeReader },
    setup() {
        const barcodeValue = ref(1232564)
        const isBarcode = ref(false)
        function salamKon() {
            console.log('salam persar!')
        }

        function onDecode(result) {
            console.log('نتیجه اسکن : ' + result)
        }
        function onLoaded() {
            console.log('load mikone!')
        }

        return { barcodeValue, salamKon, onDecode, onLoaded, isBarcode }
    },
}
</script>
