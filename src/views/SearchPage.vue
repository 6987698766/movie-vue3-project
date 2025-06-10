<template>
    <Search />

    <div class="container px-4 py-12 mx-auto">

        <section>
            <SearchCard v-for="(m, index) in searchStore.results" :media="m" :index="index" />
        </section>
    </div>
</template>
<script setup name="SearchPage">
import Search from '@/components/Search.vue'
import SearchCard from '@/components/SearchCard.vue'
import useSearch from '@/hooks/useSearch'
import { useSearchStore } from '@/stores/search'
import { onMounted, watch } from 'vue'
import { useRoute } from "vue-router";

const searchStore = useSearchStore()

const { searchMedia } = useSearch()
const route = useRoute();

onMounted(() => {
    if (route.query.q) {
        searchMedia(route.query.q)
    }
})

watch(() => route.query.q, (newQ) => {
    searchMedia(newQ)
})


</script>