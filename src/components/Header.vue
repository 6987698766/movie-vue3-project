<template>
    <header class="sticky top-0 bg-white/95 shadow-lg backdrop-blur-sm z-50">
        <div class="container mx-auto px-4 py-4">
            <div class="flex items-center justify-between">
                <div class="flex items-center space-x-2">
                    <div class="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl">
                        <IconMovieRecorder />
                    </div>
                    <h1
                        class="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        MovieFinder
                    </h1>
                </div>

                <nav class="hidden md:flex items-center space-x-8">
                    <a href="#" class="text-gray-700 hover:text-blue-600 font-medium transition-colors">首頁</a>
                    <a href="#" class="text-gray-700 hover:text-blue-600 font-medium transition-colors">電影</a>
                    <a href="#" class="text-gray-700 hover:text-blue-600 font-medium transition-colors">電視劇</a>
                    <a href="#" class="text-gray-700 hover:text-blue-600 font-medium transition-colors">我的最愛</a>
                </nav>

                <button class="md:hidden p-2" @click="emit('setMenuOpen')">
                    <IconX v-if="menuOpen" />
                    <IconMenu v-else />
                </button>
            </div>

            <nav v-if="menuOpen" class="md:hidden mt-4 pb-4 border-t pt-4">
                <div class="flex flex-col space-y-3">
                    <a href="#" class="text-gray-700 hover:text-blue-600 font-medium">首頁</a>
                    <a href="#" class="text-gray-700 hover:text-blue-600 font-medium">電影</a>
                    <a href="#" class="text-gray-700 hover:text-blue-600 font-medium">電視劇</a>
                    <a href="#" class="text-gray-700 hover:text-blue-600 font-medium">我的最愛</a>
                </div>
            </nav>

        </div>
    </header>
</template>

<script setup lang="ts" name="Header">
import IconMovieRecorder from '@/components/icons/IconMovieRecorder.vue';
import IconMenu from '@/components/icons/IconMenu.vue';
import IconX from '@/components/icons/IconX.vue';

const props = defineProps(['menuOpen'])
const emit = defineEmits(['setMenuOpen'])


</script>