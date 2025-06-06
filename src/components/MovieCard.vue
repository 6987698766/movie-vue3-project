<template>
    <div
        class="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden">
        <div class="relative">
            <img :src=movie.poster :alt=movie.title :key=movie.id
                class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" />
            <div
                class="absolute top-2 left-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-sm font-bold flex items-center">
                <span class="text-lg mr-1"> #{{ movie.id }}</span>
            </div>
            <div
                class="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <IconPlay />
            </div>
        </div>


        <div class="p-4">
            <h3 class="font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                {{ movie.title }}
            </h3>
            <div class="flex items-center text-gray-600 text-sm">
                <IconCalendar class="w-4 h-4 mr-1" />
                {{ movie.year }}
            </div>
        </div>
    </div>

</template>

<script lang="ts" setup name="MovieCard">
import { defineProps } from 'vue'

import IconPlay from './icons/IconPlay.vue';
import IconCalendar from './icons/IconCalendar.vue';

let x = defineProps(['movie'])

</script>
