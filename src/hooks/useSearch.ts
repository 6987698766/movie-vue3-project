import axios from "axios";
import { useSearchStore } from "@/stores/search";
import { useRouter, useRoute } from "vue-router";
import { storeToRefs } from "pinia";

export default function () {
  const router = useRouter();
  const route = useRoute();

  const searchStore = useSearchStore();
  const { searchQuery } = storeToRefs(searchStore);
  const MULTI_SEARCH = "https://api.themoviedb.org/3/search/multi";
  const AUTH_KEY = import.meta.env.VITE_TMDB_AUTH_KEY;

  async function searchMedia(q?: string) {
    if (q != undefined) {
      searchQuery.value = q;
    }

    try {
      let {
        data: { results: results },
      } = await axios.get(MULTI_SEARCH, {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + AUTH_KEY,
        },
        params: {
          query: searchStore.searchQuery,
          page: 1,
        },
      });

      searchStore.results = results;

      if (route.name === "SearchPage") {
        router.replace({
          name: "SearchPage",
          query: {
            q: searchStore.searchQuery,
          },
        });
      } else {
        router.push({
          name: "SearchPage",
          query: {
            q: searchStore.searchQuery,
          },
        });
      }
    } catch (error) {
      alert(error);
    }
  }

  return { searchMedia };
}
