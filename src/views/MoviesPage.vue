<template>
  <div class="container py-4 mx-auto">
    <p class="p-8 text-3xl">{{ $t("filterPage.popularMovies") }}</p>

    <div class="flex flex-col lg:flex-row">
      <aside class="w-full p-4 space-y-4 lg:w-1/4 bg-slate-100">
        <div class="w-full px-4 py-2 bg-white shadow-lg rounded-xl">
          <div
            class="flex items-center justify-between cursor-pointer"
            @click="sortIsOpen = !sortIsOpen"
          >
            <span class="text-2xl">{{ $t("filterPage.sort") }}</span>
            <span>
              <IconRightArrow v-if="!sortIsOpen" class="w-3 h-3" />
              <IconDownArrow v-else class="w-3" h-3 />
            </span>
          </div>
          <div class="pt-2" :class="{ hidden: !sortIsOpen }">
            <hr class="-mx-4 border-gray-300" />
            <label
              for="sort"
              class="block mt-2 mb-2 font-light text-gray-700 text-md dark:text-white"
              >{{ $t("filterPage.sortResultBy") }}</label
            >
            <select
              v-model="selectedSort"
              id="sort"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            >
              <option value="popularity.asc">{{ $t("filterPage.popularity_asc") }}</option>
              <option value="popularity.desc">{{ $t("filterPage.popularity_desc") }}</option>
              <option value="primary_release_date.asc">
                {{ $t("filterPage.release_date_asc") }}
              </option>
              <option value="primary_release_date.desc">
                {{ $t("filterPage.release_date_desc") }}
              </option>
              <option value="title.asc">{{ $t("filterPage.name_asc") }}</option>
              <option value="title.desc">{{ $t("filterPage.name_desc") }}</option>
            </select>
          </div>
        </div>
        <div class="w-full px-4 py-2 bg-white shadow-lg rounded-xl">
          <div
            class="flex items-center justify-between cursor-pointer"
            @click="filterIsOpen = !filterIsOpen"
          >
            <span class="text-2xl">{{ $t("filterPage.filter") }}</span>
            <span>
              <IconRightArrow v-if="!filterIsOpen" class="w-3 h-3" />
              <IconDownArrow v-else class="w-3" h-3 />
            </span>
          </div>
          <div :class="{ hidden: !filterIsOpen }">
            <div class="pt-2">
              <hr class="-mx-4 border-gray-300" />
              <p class="mt-2 font-light text-gray-700 text-md">{{ $t("filterPage.genres") }}</p>
              <ul>
                <li
                  v-for="(g, id) in genres"
                  :class="[
                    'inline-flex px-2 py-1 mt-1 mr-1 border rounded-2xl border-slate-400',
                    selectedGenres.includes(g.id) ? 'bg-blue-500 text-white border-blue-500' : '',
                  ]"
                >
                  <a :href="`/discover/tv?with_genres=${g.id}`" @click.prevent="toggleGenre(g.id)">
                    {{ $t(`filterPage.${g.name.toLowerCase().replace(/\s+/g, "_")}`) }}
                  </a>
                </li>
              </ul>
            </div>
            <div class="pt-2">
              <hr class="-mx-4 border-gray-300" />
              <p class="mt-2 mb-2 font-light text-gray-700 text-md">
                {{ $t("filterPage.release_dates") }}
              </p>
              <div class="text-sm">
                <span class="italic text-gray-400">{{ $t("filterPage.release_dates_from") }}</span>
                <VueDatePicker
                  v-model="date_from"
                  :enable-time-picker="false"
                  :action-row="{ showNow: true }"
                  format="yyyy-MM-dd"
                  model-type="yyyy-MM-dd"
                  :placeholder="$t('filterPage.select_date')"
                ></VueDatePicker>
              </div>
              <div class="text-sm">
                <span class="italic text-gray-400">{{ $t("filterPage.release_dates_to") }}</span>
                <VueDatePicker
                  v-model="date_to"
                  :enable-time-picker="false"
                  :action-row="{ showNow: true }"
                  format="yyyy-MM-dd"
                  model-type="yyyy-MM-dd"
                  :placeholder="$t('filterPage.select_date')"
                ></VueDatePicker>
              </div>
            </div>
          </div>
        </div>

        <button
          class="w-full px-4 py-2 text-white bg-indigo-500 shadow-lg rounded-xl"
          @click="discover"
        >
          {{ $t("filterPage.search") }}
        </button>
      </aside>
      <main class="w-full p-4 lg:w-3/4">
        <div ref="resultSection"></div>
        <div class="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          <MovieCard v-for="(m, index) in results" :media="m" :index="index" media_type="movie" />
        </div>
        <div ref="loadTrigger" class="h-px"></div>
        <LoadingSpinner class="mt-8" v-if="isLoading" />
      </main>
    </div>
  </div>
</template>
<script setup name="MoviesPage" lang="ts">
import { ref, onMounted, nextTick } from "vue";
import { useRoute, useRouter } from "vue-router";
import type { TmdbGenre } from "@/types/type";
import IconDownArrow from "@/components/icons/IconDownArrow.vue";
import IconRightArrow from "@/components/icons/IconRightArrow.vue";
import MovieCard from "@/components/MovieCard.vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import useMediaDetail from "@/hooks/useMediaDetail";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import LoadingSpinner from "@/components/LoadingSpinner.vue";

const route = useRoute();
const router = useRouter();

const results = ref<any[]>([]);
const loadTrigger = ref<HTMLElement | null>(null);

const date_from = ref("");
const date_to = ref("");
const genres = ref<TmdbGenre[]>([]);
const selectedGenres = ref<number[]>([]);
const selectedSort = ref<string>("popularity.desc");
const sortIsOpen = ref(false);
const filterIsOpen = ref(false);
const resultSection = ref<HTMLElement | null>(null);

const filterOptions = ref({
  language: "en-US",
  sort_by: selectedSort.value,
  page: 1,
});

const { fetchGenres, discoverMovies } = useMediaDetail();

onMounted(async () => {
  genres.value = await fetchGenres("movie");
  if (route.query.page) {
    filterOptions.value = {
      ...filterOptions.value,
      ...route.query,
    };
    const res = await discoverMovies(filterOptions.value);
    results.value = res.results;
  } else {
    const res = await discoverMovies(filterOptions.value);
    results.value = res.results;
  }

  await nextTick();

  setTimeout(() => {
    setupObserver();
  }, 300);
});

const { hasMore, isLoading, setupObserver } = useInfiniteScroll(
  discoverMovies,
  filterOptions,
  results,
  loadTrigger
);

function toggleGenre(id: number) {
  const index = selectedGenres.value.indexOf(id);
  if (index > -1) {
    selectedGenres.value.splice(index, 1);
  } else {
    selectedGenres.value.push(id);
  }
}

async function discover() {
  isLoading.value = false;
  hasMore.value = true;
  const q = {
    language: "en-US",
    sort_by: selectedSort.value,
    page: 1,
    with_genres: selectedGenres.value.join("|"),
    "primary_release_date.gte": date_from.value,
    "primary_release_date.lte": date_to.value,
  };

  filterOptions.value = {
    ...filterOptions.value,
    ...q,
  };

  results.value = (await discoverMovies(filterOptions.value)).results;

  if (window.innerWidth < 1024) {
    setTimeout(() => {
      window.scrollTo({ top: 280, behavior: "instant" });
    }, 300);
  }

  router.push({
    name: "MoviesPage",
    query: filterOptions.value,
  });
}
</script>
