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
import { useSearchStore } from '@/stores/search'

const searchStore = useSearchStore()


</script>