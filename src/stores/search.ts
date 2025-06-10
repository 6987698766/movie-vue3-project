import { defineStore } from "pinia";
import { ref } from "vue";

// menu狀態集中管理
export const useSearchStore = defineStore("search", () => {
  let searchQuery = ref("");
  const results = ref<{}[]>([]);

  return { searchQuery, results };
});
