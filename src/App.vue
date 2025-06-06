<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
    <Header :menuOpen="menuOpen" @setMenuOpen="setMenuOpen" />

    <!-- {/* Search Section */} -->
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
            <input type="text"
              class="w-full px-6 py-4 text-lg border-0 shadow-2xl rounded-2xl focus:ring-4 focus:ring-white/30 focus:outline-none pr-14"
              placeholder="搜尋電影、電視劇、演員..." />
            <button
              class="absolute p-3 transition-all transform -translate-y-1/2 right-2 top-1/2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-xl">
              <IconSearch />
            </button>
          </div>
        </div>
      </div>
    </section>

    <div class="container px-4 py-12 mx-auto">
      <!-- {/* Top 10 movies */} -->
      <section class="mb-16">
        <div class="flex items-center mb-8">
          <div class="p-3 mr-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl">
            <IconTrendingUp />
          </div>
          <h2 class="text-3xl font-bold text-gray-800">熱門電影 TOP 20</h2>
        </div>

        <div class="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          <MovieCard v-for="(m, index) in topMovies" :movie="m" :index="index" />
        </div>
      </section>
      <!-- {/* Top 10 TV shows */} -->
      <section>
        <div class="flex items-center mb-8">
          <div class="p-3 mr-4 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl">
            <IconTv class="w-6 h-6 text-white" />
          </div>
          <h2 class="text-3xl font-bold text-gray-800">熱門電視劇 TOP 20</h2>
        </div>

        <div class="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          <MovieCard v-for="(m, index) in topTVShows" :movie="m" :index="index" />
        </div>
      </section>

    </div>

    <!-- Footer -->
    <Footer></Footer>
    <!-- <RouterView /> -->
  </div>
</template>

<script lang="ts" setup name="App">
import { RouterLink, RouterView } from 'vue-router'
import { onMounted, ref } from "vue";
import axios from 'axios';

import IconSearch from '@/components/icons/IconSearch.vue';
import IconTrendingUp from '@/components/icons/IconTrendingUp.vue';
import MovieCard from '@/components/MovieCard.vue';
import IconTv from '@/components/icons/IconTv.vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue'

let menuOpen = ref(false)

function setMenuOpen() {
  menuOpen.value = !menuOpen.value
}

let topMovies = ref<{}[]>([])
let topTVShows = ref<{}[]>([])

const AUTH_KEY = import.meta.env.VITE_TMDB_AUTH_KEY
const BASE_URL = 'https://api.themoviedb.org/3'
const TOP_RATED_MOVIE_URL = 'https://api.themoviedb.org/3/movie/top_rated'
const TOP_RATED_TV_URL = 'https://api.themoviedb.org/3/tv/top_rated'


async function getTopMoive() {
  let { data: { results: results } } = await axios.get(TOP_RATED_MOVIE_URL, {
    headers: {
      'Accept': 'application/json',
      Authorization: 'Bearer ' + AUTH_KEY
    }
  })
  topMovies.value = results
}
async function getTopTvShow() {
  let { data: { results: results } } = await axios.get(TOP_RATED_TV_URL, {
    headers: {
      'Accept': 'application/json',
      Authorization: 'Bearer ' + AUTH_KEY
    }
  })
  topTVShows.value = results

}

onMounted(() => {
  getTopMoive()
  getTopTvShow()
})


</script>

<style scoped></style>
