<template>
    <div class="flex h-48 mb-4 overflow-hidden bg-white shadow-lg rounded-xl">
        <div class="flex-shrink-0 ">
            <img :src="media.poster_path
                ? 'https://image.tmdb.org/t/p/w500' + media.poster_path : 'https://dummyimage.com/300x450/9e9e9e/fff.png&text=No+image'"
                :alt=media.title class="object-cover w-full h-full aspect-[2/3] rounded-l-xl">
        </div>
        <div class="flex-1 p-6">
            <h3 class="mb-2 text-xl font-bold text-gray-900">{{ media.title || media.name }}</h3>
            <p class="mb-3 text-sm text-gray-600">{{ media.release_date }}</p>
            <p class="mb-4 leading-relaxed text-gray-700 line-clamp-2">
                {{ media.overview }}
            </p>
        </div>
    </div>
</template>
<script lang="ts" setup name="SearchCard">

defineProps(['media', 'index'])

</script>