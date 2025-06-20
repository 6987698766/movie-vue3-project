import { createRouter, createWebHistory } from "vue-router";
import SearchPage from "@/views/SearchPage.vue";
import HomePage from "@/views/HomePage.vue";
import WatchlistPage from "@/views/WatchlistPage.vue";
import MovieDetailPage from "@/views/MovieDetailPage.vue";
import TvDetailPage from "@/views/TvDetailPage.vue";
import MoviesPage from "@/views/MoviesPage.vue";
import TvShowsPage from "@/views/TvShowsPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: "HomePage",
      path: "/",
      component: HomePage,
    },
    {
      name: "SearchPage",
      path: "/search",
      component: SearchPage,
    },
    {
      name: "WatchlistPage",
      path: "/watchlist",
      component: WatchlistPage,
    },
    {
      name: "MovieDetailPage",
      path: "/media-detail/movie/:id",
      component: MovieDetailPage,
    },
    {
      name: "TvDetailPage",
      path: "/media-detail/tv/:id",
      component: TvDetailPage,
    },
    {
      name: "MoviesPage",
      path: "/movie",
      component: MoviesPage,
    },
    {
      name: "TvShowsPage",
      path: "/tv",
      component: TvShowsPage,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
