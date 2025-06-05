<template>
  <header class="sticky top-0 bg-white/95 shadow-lg backdrop-blur-sm">
    <div class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-2">
          <div class="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl">
            <IconMovieRecorder />
          </div>
          <h1 class="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            MovieFinder
          </h1>
        </div>

        <nav class="hidden md:flex items-center space-x-8">
          <a href="#" class="text-gray-700 hover:text-blue-600 font-medium transition-colors">首頁</a>
          <a href="#" class="text-gray-700 hover:text-blue-600 font-medium transition-colors">電影</a>
          <a href="#" class="text-gray-700 hover:text-blue-600 font-medium transition-colors">電視劇</a>
          <a href="#" class="text-gray-700 hover:text-blue-600 font-medium transition-colors">我的最愛</a>
        </nav>

        <button class="md:hidden p-2" @click="setMenuOpen">
          <IconX v-if="menuOpen" />
          <IconMenu v-else />
        </button>
      </div>

    </div>
  </header>

  <!-- {/* Search Section */} -->
  <section class="relative py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700">
    <div class="absolute inset-0 bg-black/20"></div>
    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center mb-8">
        <h2 class="text-4xl md:text-6xl font-bold text-white mb-4">
          探索無限精彩
        </h2>
        <p class="text-xl text-white/90 mb-8">
          數百萬部電影與電視劇，等你來發現
        </p>
      </div>
      <div class="mx-auto max-w-2xl">
        <div class="relative">
          <input type="text"
            class="w-full px-6 py-4 text-lg rounded-2xl border-0 shadow-2xl focus:ring-4 focus:ring-white/30 focus:outline-none pr-14"
            placeholder="搜尋電影、電視劇、演員..." />
          <button class="absolute right-2 top-1/2 transform -translate-y-1/2
            bg-gradient-to-r from-blue-500 to-purple-600
            hover:from-blue-600 hover:to-purple-700
            transition-all p-3 rounded-xl">
            <Iconsearch />
          </button>
        </div>
      </div>
    </div>
  </section>

  <RouterView />
</template>

<script lang="ts" setup name="App">
import { RouterLink, RouterView } from 'vue-router'
import { ref } from "vue";
import '@/components/icons/Iconsearch.vue'
import Iconsearch from '@/components/icons/Iconsearch.vue';
import IconMovieRecorder from '@/components/icons/IconMovieRecorder.vue';
import IconMenu from '@/components/icons/IconMenu.vue';
import IconX from './components/icons/IconX.vue';

let menuOpen = ref(false)

function setMenuOpen() {
  menuOpen.value = !menuOpen.value
}
</script>

<style scoped></style>
