import { ref, onUnmounted } from "vue";
import type { Ref } from "vue";

export default function (
  apiFunction: (query: Record<string, any>) => Promise<any>,
  initialQuery: Ref<Record<string, any>>,
  resultsRef: Ref<Record<string, any>>,
  observerEl: Ref<HTMLElement | null>
) {
  const isLoading = ref(false);
  const hasMore = ref(true);
  let observer: IntersectionObserver | null = null;

  async function loadMore() {
    if (isLoading.value || !hasMore.value) return;
    isLoading.value = true;

    initialQuery.value.page = Number(initialQuery.value.page) + 1;

    try {
      const query = { ...initialQuery.value, page: initialQuery.value.page };
      const response = await apiFunction(query);

      const newItems = response.results || [];

      resultsRef.value.push(...newItems);

      hasMore.value = initialQuery.value.page <= response.total_pages;
    } catch (err) {
      console.error("載入資料失敗:", err);
    } finally {
      isLoading.value = false;
    }
  }

  function setupObserver() {
    if (!observerEl.value) return;
    observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        loadMore();
      }
    });

    observer.observe(observerEl.value);
  }

  function cleanupObserver() {
    if (observer && observerEl.value) {
      observer.unobserve(observerEl.value);
      observer.disconnect();
      observer = null;
    }
  }

  onUnmounted(() => {
    cleanupObserver();
  });

  return {
    setupObserver,
    isLoading,
    loadMore,
    hasMore,
  };
}
