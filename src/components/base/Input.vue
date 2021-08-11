<template>
    <input
        class="py-2 px-4 border-1 mr-2 rounded-md"
        :type="format"
        @focus="onFocus"
        @blur="onBlur"
        name=""
        value=""
    />
</template>

<script>
import { reactive, toRefs, nextTick } from 'vue'

export default {
    props: {
        format: {
            type: String,
            default: 'text',
        },
    },
    setup(props, { emit }) {
        const inputFunc = reactive({
            onFocus: onFocus,
            onBlur: onBlur,
        })

        function localStringToNumber(s) {
            return Number(String(s).replace(/[^0-9.-]+/g, ''))
        }

        function onFocus(e) {
            return e.target.select()
            if (props.format == 'currency') {
                var value = e.target.value
                e.target.value = value ? localStringToNumber(value) : ''
            }
        }

        function onBlur(e) {
            if (props.format == 'currency') {
                var value = e.target.value
                e.target.value =
                    value || value === 0
                        ? localStringToNumber(value).toLocaleString()
                        : ''
            }
        }

        return { ...toRefs(inputFunc) }
    },
}
</script>
