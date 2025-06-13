<template>
    <div class="">
        <section class="relative flex px-16 py-12 bg-[#20223a] bg-cover bg-center "
            :style="{backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.2)),url('https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces${detailData.backdrop_path}')`}">
            <div class="z-10 flex-shrink-0 w-72">
                <img :src="detailData.poster_path
                    ? 'https://image.tmdb.org/t/p/w500' + detailData.poster_path : 'https://dummyimage.com/300x450/9e9e9e/fff.png&text=No+image'"
                    :alt=detailData.title class="object-cover aspect-[2/3]">
            </div>
            <div class="z-10 flex items-center pl-16">
                <section class="space-y-10">
                    <div class="text-white">
                        <p class="text-4xl">{{ detailData.name }}</p>

                        <div class="flex space-x-2 text-s text-slate-200">
                            <span>{{ detailData.first_air_date}}</span>
                            <span class="flex space-x-2">
                                ・<span v-for="(g) in detailData.genres"> {{ g.name }} </span>
                            </span>
                        </div>
                    </div>

                    <p class="text-lg italic text-slate-200"> {{ detailData.tagline }} </p>

                    <div class="flex items-center mt-2 space-x-4 text-xl text-slate-200">
                        <p>加入清單</p>
                        <button class="flex items-center space-x-1">
                            <IconPlay :isSolid="true" class="text-white" />
                            <p>播放預告片</p>
                        </button>
                    </div>

                    <div class=" text-neutral-100">
                        <p class="text-lg">Overview</p>
                        <p>{{ detailData.overview }}</p>
                    </div>
                </section>
            </div>
        </section>
        <section class="flex-col px-16 py-12">
            <p class="mb-4 text-2xl">主要演員</p>
            <div>
                <ul class="flex space-x-2">
                    <li v-for="(p) in detailCast" :key="p.id">

                        <img :src="`https://media.themoviedb.org/t/p/w138_and_h175_face${p.profile_path}`" :alt="p.name">
                        <p class="font-bold">{{p.character}}</p>
                        <p>{{p.name}}</p>
                    </li>
                </ul>
            </div>
        </section>
    </div>

</template>

<script setup lang="ts">
import IconPlay from '@/components/icons/IconPlay.vue';
import useMediaDetail from '@/hooks/useMediaDetail';
import { useRoute } from "vue-router";
import { onMounted, ref, computed } from 'vue'

const route = useRoute();
const detailData = ref({} as Record<string, any>);
const detailCast = ref([] as Array<Record<string, any>>);



const { goDetail } = useMediaDetail()

onMounted
    (
        async () => {
            const res = await goDetail(route.params.type as string, route.params.id as string)
            console.log(res)
            detailData.value = res.info;
            detailCast.value = res.cast
        }
    )


</script>