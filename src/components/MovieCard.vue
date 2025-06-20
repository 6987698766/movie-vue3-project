<template>
  <div
    class="relative overflow-hidden transition-all duration-300 transform bg-white shadow-lg group rounded-xl hover:shadow-2xl hover:-translate-y-2"
  >
    <div class="relative overflow-hidden">
      <img
        :src="
          media.poster_path
            ? 'https://image.tmdb.org/t/p/original' + media.poster_path
            : 'https://dummyimage.com/300x450/9e9e9e/fff.png&text=No+image'
        "
        :alt="media.title"
        :key="media.id"
        class="object-cover w-full transition-transform duration-300 h-70 group-hover:scale-110"
      />
      <div
        class="absolute flex items-center px-2 py-1 text-sm font-bold text-white rounded-full top-2 left-2 bg-gradient-to-r from-yellow-400 to-orange-500"
      >
        <span class="mr-1 text-lg"> #{{ index + 1 }}</span>
      </div>
      <div
        class="absolute inset-0 flex items-center justify-center transition-colors duration-300 bg-black/0 group-hover:bg-black/40"
      >
        <IconPlay
          :isSolid="false"
          customClass="w-12 h-12 transition-opacity duration-300 opacity-0 group-hover:opacity-100 text-white"
        />
      </div>
    </div>

    <div class="p-4">
      <h3
        @click="getDetail(media.id, media_type)"
        class="mb-2 font-bold text-gray-800 transition-colors line-clamp-2 group-hover:text-blue-600 hover:cursor-pointer"
      >
        {{ media.title || media.name }}
      </h3>
      <div class="flex items-center text-sm text-gray-600">
        <IconCalendar class="w-4 h-4 mr-1" />
        {{ media.release_date || media.first_air_date }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup name="MovieCard">
import IconPlay from "./icons/IconPlay.vue";
import IconCalendar from "./icons/IconCalendar.vue";
import { useRouter } from "vue-router";

const router = useRouter();

defineProps(["media", "index", "media_type"]);

function getDetail(id: number, type: string) {
  if (type == "tv") {
    // router.push({ name: "TvDetailPage", params: { id: id.toString() } });
    const url = `${window.location.origin}/media-detail/${type}/${id}`;
    window.open(url, "_blank");
  } else {
    const url = `${window.location.origin}/media-detail/${type}/${id}`;
    window.open(url, "_blank");
    // router.push({ name: "MovieDetailPage", params: { id: id.toString() } });
  }
}
</script>
