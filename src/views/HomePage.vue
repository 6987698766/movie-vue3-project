<template>
    <Search />

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
</template>
<script setup name="HomePage" lang="ts">
import { onMounted, ref } from "vue";
import axios from 'axios';
import Search from '@/components/Search.vue'
import { storeToRefs } from "pinia";
import { useSearchStore } from '@/stores/search'

const searchStore = useSearchStore();
const { searchQuery, results } = storeToRefs(searchStore);


import IconTrendingUp from '@/components/icons/IconTrendingUp.vue';
import MovieCard from '@/components/MovieCard.vue';
import IconTv from '@/components/icons/IconTv.vue';

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
    searchQuery.value = "";
    results.value = [];

    getTopMoive()
    getTopTvShow()
})
</script>