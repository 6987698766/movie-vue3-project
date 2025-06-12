<template>
    <div class="container px-4 py-12 mx-auto">

        <section>
            <SearchCard v-for="(m, index) in watchlistStore.watchlist" :media="m" :index="index" />
        </section>
    </div>
</template>
<script setup name="WatchlistPage">

import { useWatchlistStore } from '@/stores/watchlist';
import SearchCard from '@/components/SearchCard.vue';

const watchlistStore = useWatchlistStore()

</script>