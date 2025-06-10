<template>
    <header class="sticky top-0 z-50 shadow-lg bg-white/95 backdrop-blur-sm">
        <div class="container px-4 py-4 mx-auto">
            <div class="flex items-center justify-between">
                <router-link :to="'/'">
                    <div class="flex items-center space-x-2">
                        <div class="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl">
                            <IconMovieRecorder />
                        </div>
                        <h1
                            class="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                            MovieFinder
                        </h1>
                    </div>
                </router-link>

                <nav class="items-center hidden space-x-8 md:flex">
                    <!-- <a href="/" class="font-medium text-gray-700 transition-colors hover:text-blue-600">首頁</a> -->
                    <router-link :to="'/'" class="font-medium text-gray-700 transition-colors hover:text-blue-600">
                        首頁
                    </router-link>
                    <a href="#" class="font-medium text-gray-700 transition-colors hover:text-blue-600">電影</a>
                    <a href="#" class="font-medium text-gray-700 transition-colors hover:text-blue-600">電視劇</a>
                    <a href="#" class="font-medium text-gray-700 transition-colors hover:text-blue-600">我的最愛</a>
                </nav>

                <button class="p-2 md:hidden" @click="menuStore.setMenuOpen">
                    <IconX v-if="menuStore.menuOpen" />
                    <IconMenu v-else />
                </button>
            </div>

            <nav v-if="menuStore.menuOpen" class="pt-4 pb-4 mt-4 border-t md:hidden">
                <div class="flex flex-col space-y-3">
                    <a href="#" class="font-medium text-gray-700 hover:text-blue-600">首頁</a>
                    <a href="#" class="font-medium text-gray-700 hover:text-blue-600">電影</a>
                    <a href="#" class="font-medium text-gray-700 hover:text-blue-600">電視劇</a>
                    <a href="#" class="font-medium text-gray-700 hover:text-blue-600">我的最愛</a>
                </div>
            </nav>

        </div>
    </header>
</template>

<script setup lang="ts" name="Header">
import IconMovieRecorder from '@/components/icons/IconMovieRecorder.vue';
import IconMenu from '@/components/icons/IconMenu.vue';
import IconX from '@/components/icons/IconX.vue';
import { useMenuStore } from '@/stores/menu'

const menuStore = useMenuStore()

// const props = defineProps(['menuOpen'])
// const emit = defineEmits(['setMenuOpen'])


</script>