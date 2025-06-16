<template>
  <div
    v-if="show"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
  >
    <div class="relative w-full max-w-xl bg-white rounded-lg shadow-lg md:max-w-3xl lg:max-w-5xl">
      <div class="flex justify-between px-4 py-2 bg-black">
        <span class="text-white">{{ $t("detail.playTrailer") }}</span>
        <button @click="$emit('close')" class="text-xl font-bold text-gray-600 hover:text-gray-900">
          &times;
        </button>
      </div>

      <iframe
        v-if="videoKey"
        :src="`https://www.youtube.com/embed/${videoKey}`"
        frameborder="0"
        allowfullscreen
        class="w-full aspect-video"
      ></iframe>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  show: boolean;
  videoKey?: string;
}>();
</script>
