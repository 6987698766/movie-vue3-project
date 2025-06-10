import { createRouter, createWebHistory } from "vue-router";
import SearchPage from "@/views/SearchPage.vue";
import HomePage from "@/views/HomePage.vue";

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
  ],
});

export default router;
