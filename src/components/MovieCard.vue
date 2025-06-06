<template>
    <div
        class="relative overflow-hidden transition-all duration-300 transform bg-white shadow-lg group rounded-xl hover:shadow-2xl hover:-translate-y-2">
        <div class="relative">
            <img :src="'https://image.tmdb.org/t/p/original' + movie.poster_path" :alt=movie.title :key=movie.id
                class="object-cover w-full transition-transform duration-300 h-70 group-hover:scale-100" />
            <div
                class="absolute flex items-center px-2 py-1 text-sm font-bold text-white rounded-full top-2 left-2 bg-gradient-to-r from-yellow-400 to-orange-500">
                <span class="mr-1 text-lg"> #{{ index + 1 }}</span>
            </div>
            <div
                class="absolute inset-0 flex items-center justify-center transition-colors duration-300 bg-black/0 group-hover:bg-black/40">
                <IconPlay />
            </div>
        </div>


        <div class="p-4">
            <h3 class="mb-2 font-bold text-gray-800 transition-colors line-clamp-2 group-hover:text-blue-600">
                {{ movie.title || movie.name }}
            </h3>
            <div class="flex items-center text-sm text-gray-600">
                <IconCalendar class="w-4 h-4 mr-1" />
                {{ movie.release_date || movie.first_air_date }}
            </div>
        </div>
    </div>

</template>

<script lang="ts" setup name="MovieCard">

import IconPlay from './icons/IconPlay.vue';
import IconCalendar from './icons/IconCalendar.vue';

defineProps(['movie', 'index'])

</script>
