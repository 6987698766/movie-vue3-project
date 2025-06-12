import { defineStore } from "pinia";
import { ref } from "vue";

export const useWatchlistStore = defineStore("watchlist", () => {
  const watchlist = ref<{ [key: number]: Record<string, any> }>(
    JSON.parse(localStorage.getItem("watchlist") || "{}")
  );

  function toggleWatchlist(movie: any) {
    if (!watchlist.value[movie.id]) {
      watchlist.value[movie.id] = { ...movie, isBookmarked: true };
    } else {
      delete watchlist.value[movie.id];
    }
  }

  function checkBookmarked(id: number): boolean {
    return watchlist.value[id]?.isBookmarked ?? false;
  }

  return {
    watchlist,
    toggleWatchlist,
    checkBookmarked,
  };
});

export function setupWatchlistSubscription() {
  const store = useWatchlistStore();

  store.$subscribe(
    (mutation, state) => {
      localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    },
    { detached: true }
  );
}
