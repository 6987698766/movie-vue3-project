<template>
  <section class="relative w-full">
    <div
      class="absolute inset-0 bg-center bg-cover"
      :style="{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.2)),url('https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces${detailData.backdrop_path}')`,
      }"
    ></div>
    <!-- 內容層 -->
    <div class="relative lg:min-h-[50vh]">
      <div class="flex flex-col min-h-full lg:flex-row lg:items-center lg:justify-center">
        <!-- 左側 -->
        <div class="w-64 py-4 pl-8 lg:w-72 lg:flex-shrink-0 lg:p-12">
          <img
            :src="
              detailData.poster_path
                ? 'https://image.tmdb.org/t/p/w500' + detailData.poster_path
                : 'https://dummyimage.com/300x450/9e9e9e/fff.png&text=No+image'
            "
            :alt="detailData.title"
          />
        </div>
        <!-- 右側 -->
        <div class="flex-1 hidden p-8 space-y-4 lg:p-1 lg:block">
          <div class="text-white">
            <p class="text-4xl">{{ detailData.name }}</p>

            <div class="flex space-x-2 text-s text-slate-200">
              <span>{{ detailData.first_air_date }}</span>
              <span class="flex space-x-2">
                ・<span v-for="g in detailData.genres"> {{ g.name }} </span>
              </span>
            </div>
          </div>

          <p class="text-lg italic text-slate-200">{{ detailData.tagline }}</p>

          <div class="flex items-center mt-2 space-x-4 text-xl text-slate-200">
            <button
              class="flex items-center space-x-1"
              @click="watchlistStore.toggleWatchlist(detailData)"
            >
              <span class="pr-1 transition-colors rounded-lg hover:bg-gray-100">
                <IconBookmark :is-filled="watchlistStore.checkBookmarked(detailData.id)" />
              </span>
              <p class="">
                {{
                  watchlistStore.checkBookmarked(detailData.id) ? "取消待看清單" : "加入待看清單"
                }}
              </p>
            </button>
            <button class="flex items-center space-x-1" @click="showModal = true">
              <IconPlay :isSolid="true" class="text-white" />
              <p>播放預告片</p>
            </button>
          </div>

          <div class="text-neutral-100">
            <p class="text-lg">Overview</p>
            <p>{{ detailData.overview }}</p>
          </div>
        </div>
      </div>
      <ModalTrailer
        :show="showModal"
        :videoKey="trailer.key as string"
        @close="showModal = false"
      />
    </div>
  </section>
  <section>
    <div class="p-8 space-y-4 lex-1 lg:hidden lg:p-1 bg-zinc-900">
      <div class="text-white">
        <p class="text-4xl">{{ detailData.name }}</p>

        <div class="flex space-x-2 text-s text-slate-200">
          <span>{{ detailData.first_air_date }}</span>
          <span class="flex space-x-2">
            ・<span v-for="g in detailData.genres"> {{ g.name }} </span>
          </span>
        </div>
      </div>

      <p class="text-lg italic text-slate-200">{{ detailData.tagline }}</p>

      <div class="flex items-center mt-2 space-x-4 text-xl text-slate-200">
        <button
          class="flex items-center space-x-1"
          @click="watchlistStore.toggleWatchlist(detailData)"
        >
          <span class="pr-1 transition-colors rounded-lg hover:bg-gray-100">
            <IconBookmark :is-filled="watchlistStore.checkBookmarked(detailData.id)" />
          </span>
          <p class="">
            {{ watchlistStore.checkBookmarked(detailData.id) ? "取消待看清單" : "加入待看清單" }}
          </p>
        </button>
        <button class="flex items-center space-x-1" @click="showModal = true">
          <IconPlay :isSolid="true" class="text-white" />
          <p>播放預告片</p>
        </button>
      </div>

      <div class="text-neutral-100">
        <p class="text-lg">Overview</p>
        <p>{{ detailData.overview }}</p>
      </div>
    </div>
  </section>
  <section class="flex-col px-16 py-12">
    <p class="mb-4 text-2xl">主要演員</p>
    <div>
      <ul class="flex space-x-2">
        <li v-for="p in detailCast" :key="p.id">
          <img
            :src="`https://media.themoviedb.org/t/p/w138_and_h175_face${p.profile_path}`"
            :alt="p.name"
          />
          <p class="font-bold">{{ p.character }}</p>
          <p>{{ p.name }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import IconPlay from "@/components/icons/IconPlay.vue";
import useMediaDetail from "@/hooks/useMediaDetail";
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import IconBookmark from "@/components/icons/IconBookmark.vue";
import { useWatchlistStore } from "@/stores/watchlist";
import ModalTrailer from "@/components/ModalTrailer.vue";

const watchlistStore = useWatchlistStore();
const route = useRoute();
const detailData = ref({} as Record<string, any>);
const detailCast = ref([] as Array<Record<string, any>>);
const trailer = ref({} as Record<string, string | number | boolean>);
const showModal = ref(false);

const { goDetail } = useMediaDetail();

onMounted(async () => {
  const res = await goDetail("tv", route.params.id as string);
  detailData.value = res.info;
  detailCast.value = res.cast;
  trailer.value = res.trailer;
});
</script>
