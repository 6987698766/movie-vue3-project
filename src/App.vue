<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
    <Header :menuOpen="menuOpen" @setMenuOpen="setMenuOpen" />

    <!-- {/* Search Section */} -->
    <section class="relative py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700">
      <div class="absolute inset-0 bg-black/20"></div>
      <div class="container mx-auto px-4 relative z-10">
        <div class="text-center mb-8">
          <h2 class="text-4xl md:text-6xl font-bold text-white mb-4">
            探索無限精彩
          </h2>
          <p class="text-xl text-white/90 mb-8">
            數百萬部電影與電視劇，等你來發現
          </p>
        </div>
        <div class="mx-auto max-w-2xl">
          <div class="relative">
            <input type="text"
              class="w-full px-6 py-4 text-lg rounded-2xl border-0 shadow-2xl focus:ring-4 focus:ring-white/30 focus:outline-none pr-14"
              placeholder="搜尋電影、電視劇、演員..." />
            <button class="absolute right-2 top-1/2 transform -translate-y-1/2
            bg-gradient-to-r from-blue-500 to-purple-600
            hover:from-blue-600 hover:to-purple-700
            transition-all p-3 rounded-xl">
              <Iconsearch />
            </button>
          </div>
        </div>
      </div>
    </section>

    <div class="container mx-auto px-4 py-12">
      <!-- {/* Top 10 movies */} -->
      <section class="mb-16">
        <div class="flex items-center mb-8">
          <div class="bg-gradient-to-r from-red-500 to-pink-500 p-3 rounded-xl mr-4">
            <IconTrendingUp />
          </div>
          <h2 class="text-3xl font-bold text-gray-800">熱門電影 TOP 10</h2>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          <MovieCard v-for="m in topMovies" :movie="m" />
        </div>
      </section>
      <!-- {/* Top 10 TV shows */} -->
      <section>
        <div class="flex items-center mb-8">
          <div class="bg-gradient-to-r from-green-500 to-teal-500 p-3 rounded-xl mr-4">
            <IconTv class="w-6 h-6 text-white" />
          </div>
          <h2 class="text-3xl font-bold text-gray-800">熱門電視劇 TOP 10</h2>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          <MovieCard v-for="m in topTVShows" :movie="m" />
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
import { ref } from "vue";
import '@/components/icons/Iconsearch.vue'
import Iconsearch from '@/components/icons/Iconsearch.vue';
import IconTrendingUp from '@/components/icons/IconTrendingUp.vue';
import MovieCard from '@/components/MovieCard.vue';
import IconTv from '@/components/icons/IconTv.vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue'

let menuOpen = ref(false)

function setMenuOpen() {
  menuOpen.value = !menuOpen.value
}

const topMovies = [
  { id: 1, title: "阿凡達：水之道", rating: 8.5, year: "2022", poster: "https://images.unsplash.com/photo-1489599731030-3bb8cf637cf4?w=300&h=450&fit=crop" },
  { id: 2, title: "捍衛戰士：獨行俠", rating: 8.7, year: "2022", poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300&h=450&fit=crop" },
  { id: 3, title: "蜘蛛人：無家日", rating: 8.4, year: "2021", poster: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=450&fit=crop" },
  { id: 4, title: "沙丘", rating: 8.2, year: "2021", poster: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=450&fit=crop" },
  { id: 5, title: "黑豹2：瓦干達萬歲", rating: 7.8, year: "2022", poster: "https://images.unsplash.com/photo-1534447677743-7ca133635ed8?w=300&h=450&fit=crop" },
  { id: 6, title: "雷神索爾：愛與雷電", rating: 7.5, year: "2022", poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=300&h=450&fit=crop" },
  { id: 7, title: "奇異博士2：失控多重宇宙", rating: 7.9, year: "2022", poster: "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?w=300&h=450&fit=crop" },
  { id: 8, title: "侏羅紀世界：統霸天下", rating: 7.2, year: "2022", poster: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=450&fit=crop" },
  { id: 9, title: "玩具總動員", rating: 8.9, year: "1995", poster: "https://images.unsplash.com/photo-1578032979970-6589f2446d42?w=300&h=450&fit=crop" },
  { id: 10, title: "復仇者聯盟：終局之戰", rating: 9.1, year: "2019", poster: "https://images.unsplash.com/photo-1635863138275-d9864d29e1ca?w=300&h=450&fit=crop" }
];

const topTVShows = [
  { id: 1, title: "怪奇物語", rating: 9.2, year: "2016", poster: "https://images.unsplash.com/photo-1489599731030-3bb8cf637cf4?w=300&h=450&fit=crop" },
  { id: 2, title: "權力遊戲", rating: 9.5, year: "2011", poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=450&fit=crop" },
  { id: 3, title: "絕命毒師", rating: 9.8, year: "2008", poster: "https://images.unsplash.com/photo-1489599731030-3bb8cf637cf4?w=300&h=450&fit=crop" },
  { id: 4, title: "魷魚遊戲", rating: 8.9, year: "2021", poster: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=300&h=450&fit=crop" },
  { id: 5, title: "紙牌屋", rating: 8.7, year: "2013", poster: "https://images.unsplash.com/photo-1489599731030-3bb8cf637cf4?w=300&h=450&fit=crop" },
  { id: 6, title: "黑鏡", rating: 8.8, year: "2011", poster: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=300&h=450&fit=crop" },
  { id: 7, title: "西方極樂園", rating: 8.6, year: "2016", poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=450&fit=crop" },
  { id: 8, title: "陰屍路", rating: 8.4, year: "2010", poster: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=300&h=450&fit=crop" },
  { id: 9, title: "女王的棋局", rating: 8.9, year: "2020", poster: "https://images.unsplash.com/photo-1489599731030-3bb8cf637cf4?w=300&h=450&fit=crop" },
  { id: 10, title: "鋼之鍊金術師", rating: 9.1, year: "2003", poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=450&fit=crop" }
];

</script>

<style scoped></style>
