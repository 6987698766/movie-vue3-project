<template>
    <div class="flex h-48 mb-4 overflow-hidden bg-white shadow-lg rounded-xl">
        <div class="flex-shrink-0 ">
            <img :src="media.poster_path
                ? 'https://image.tmdb.org/t/p/w500' + media.poster_path : 'https://dummyimage.com/300x450/9e9e9e/fff.png&text=No+image'"
                :alt=media.title class="object-cover w-full h-full aspect-[2/3] rounded-l-xl">
        </div>
        <div class="flex-1">
            <div class="p-4">
                <h3 class="mb-2 text-xl font-bold text-gray-900 line-clamp-1">{{ media.title || media.name }}</h3>
                <p class="text-sm text-gray-600 ">{{ media.release_date }}</p>
                <p class="my-3 leading-relaxed text-gray-700 line-clamp-2">
                    {{ media.overview }}
                </p>
                <div>
                    <ul class="flex items-center space-x-4">
                        <li>
                            <button class="flex items-center " @click="watchlistStore.toggleWatchlist(media)">
                                <span class="pr-1 transition-colors rounded-lg hover:bg-gray-100">
                                    <IconBookmark :is-filled="watchlistStore.checkBookmarked(media.id)" />
                                </span>
                                <p class="text-zinc-400">{{ watchlistStore.checkBookmarked(media.id) ? '取消待看清單'
                                    : '加入待看清單' }}

                                </p>
                            </button>
                        </li>
                        <li><button>
                                <p class="text-zinc-400">我的最愛</p>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
</template>
<script lang="ts" setup name="SearchCard">
import IconBookmark from './icons/IconBookmark.vue';
import { useWatchlistStore } from '@/stores/watchlist'

const watchlistStore = useWatchlistStore()
defineProps(['media', 'index'])

</script>