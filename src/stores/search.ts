import { defineStore } from "pinia";
import { ref } from "vue";

export const useSearchStore = defineStore("search", () => {
  let searchQuery = ref("");
  const results = ref<{}[]>([]);

  return { searchQuery, results };
});
