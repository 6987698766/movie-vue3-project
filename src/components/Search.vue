<template>
    <section class="relative py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700">
        <div class="absolute inset-0 bg-black/20"></div>
        <div class="container relative z-10 px-4 mx-auto">
            <div class="mb-8 text-center">
                <h2 class="mb-4 text-4xl font-bold text-white md:text-6xl">
                    探索無限精彩
                </h2>
                <p class="mb-8 text-xl text-white/90">
                    數百萬部電影與電視劇，等你來發現
                </p>
            </div>
            <div class="max-w-2xl mx-auto">
                <div class="relative">
                    <input type="text" v-model="searchStore.searchQuery" @keyup.enter="getMedia"
                        class="w-full px-6 py-4 text-lg border-0 shadow-2xl rounded-2xl focus:ring-4 focus:ring-white/30 focus:outline-none pr-14"
                        placeholder="搜尋電影、電視劇、演員..." />
                    <button @click="getMedia"
                        class="absolute p-3 transition-all transform -translate-y-1/2 right-2 top-1/2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-xl">
                        <IconSearch />
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>
<script lang="ts" setup name="Search">
import { ref } from "vue";
import IconSearch from '@/components/icons/IconSearch.vue';
import { useSearchStore } from '@/stores/search'
import useSearch from '@/hooks/useSearch';


const { getMedia } = useSearch()
const searchStore = useSearchStore()




</script>