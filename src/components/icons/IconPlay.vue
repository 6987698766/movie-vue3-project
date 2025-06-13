<template>
    <svg :class="customClass" viewBox="0 0 24 24" :fill="isSolid ? 'currentColor' : 'none'"
        xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
            <path d="M8 5v14l11-7z" stroke="currentColor" stroke-width="2">
            </path>
        </g>
    </svg>
</template>
<script setup lang="ts">
defineProps({
    customClass: {
        type: String,
        default: "w-6 h-6",
    },
    isSolid: {
        type: Boolean,
        default: true,
    },
});
</script>