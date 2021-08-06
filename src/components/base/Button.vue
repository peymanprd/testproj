<template>
    <button @click="targetEvent" class="btn btn-green">
        <slot>button</slot>
    </button>
</template>
<script>
export default {
    name: 'Button',
    setup(props, { emit }) {
        function targetEvent() {
            emit('doEvent')
        }

        return { targetEvent }
    },
}
</script>
<style>
.btn {
    @apply font-bold py-2 px-4 rounded;
}
.btn-green {
    @apply bg-green-500 hover:bg-green-700 text-white;
}
</style>
