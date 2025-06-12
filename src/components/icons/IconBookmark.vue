<template>
    <svg width="24" height="24" viewBox="0 0 24 24"
        :class="['transition-colors duration-200', isFilled ? 'text-yellow-500' : 'text-gray-400']">
        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" :fill="isFilled ? 'currentColor' : 'none'"
            :stroke="'currentColor'" :stroke-width="isFilled ? '0' : '2'" stroke-linecap="round"
            stroke-linejoin="round" />
    </svg>
</template>
<script setup>
const props = defineProps({
    isFilled: {
        type: Boolean,
        default: false
    },
})

</script>