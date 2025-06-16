<template>
  <section class="relative py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700">
    <div class="absolute inset-0 bg-black/20"></div>
    <div class="container relative z-10 px-4 mx-auto">
      <div class="mb-8 text-center">
        <h2 class="mb-4 text-4xl font-bold text-white md:text-6xl">
          {{ $t("home.introTitle") }}
        </h2>
        <p class="mb-8 text-xl text-white/90">
          {{ $t("home.introDescription") }}
        </p>
      </div>
      <div class="max-w-2xl mx-auto">
        <div class="relative">
          <input
            type="text"
            v-model="searchStore.searchQuery"
            @keyup.enter="searchMedia()"
            class="w-full px-6 py-4 text-lg border-0 shadow-2xl rounded-2xl focus:ring-4 focus:ring-white/30 focus:outline-none pr-14"
            :placeholder="$t('search.placeholder')"
          />
          <button
            @click="searchMedia()"
            class="absolute p-3 transition-all transform -translate-y-1/2 right-2 top-1/2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-xl"
          >
            <IconSearch />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup name="Search">
import IconSearch from "@/components/icons/IconSearch.vue";
import { useSearchStore } from "@/stores/search";
import useSearch from "@/hooks/useSearch";

const { searchMedia } = useSearch();
const searchStore = useSearchStore();
</script>
