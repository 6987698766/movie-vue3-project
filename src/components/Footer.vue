<template>
    <footer class="bg-gray-900 text-white py-12">
        <div class="container mx-auto px-4">
            <div class="grid md:grid-cols-4 gap-8">
                <div>
                    <div class="flex items-center space-x-2 mb-4">
                        <div class="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl">
                            <IconMovieRecorder />
                        </div>
                        <h3 class="text-xl font-bold">MovieFinder</h3>
                    </div>
                    <p class="text-gray-400">
                        你的專屬影視探索平台，發現更多精彩內容。
                    </p>
                </div>
                <div>
                    <h4 class="font-semibold mb-4">快速連結</h4>
                    <ul class="space-y-2 text-gray-400">
                        <li><a href="#" class="hover:text-white transition-colors">熱門電影</a></li>
                        <li><a href="#" class="hover:text-white transition-colors">熱門電視劇</a></li>
                        <li><a href="#" class="hover:text-white transition-colors">即將上映</a></li>
                        <li><a href="#" class="hover:text-white transition-colors">排行榜</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-semibold mb-4">分類</h4>
                    <ul class="space-y-2 text-gray-400">
                        <li><a href="#" class="hover:text-white transition-colors">動作</a></li>
                        <li><a href="#" class="hover:text-white transition-colors">喜劇</a></li>
                        <li><a href="#" class="hover:text-white transition-colors">科幻</a></li>
                        <li><a href="#" class="hover:text-white transition-colors">恐怖</a></li>
                    </ul>
                </div>

                <div>
                    <h4 class="font-semibold mb-4">關於我們</h4>
                    <ul class="space-y-2 text-gray-400">
                        <li><a href="#" class="hover:text-white transition-colors">聯絡我們</a></li>
                        <li><a href="#" class="hover:text-white transition-colors">隱私政策</a></li>
                        <li><a href="#" class="hover:text-white transition-colors">服務條款</a></li>
                        <li><a href="#" class="hover:text-white transition-colors">FAQ</a></li>
                    </ul>
                </div>
            </div>

            <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                <p>&copy; 2025 MovieFinder. All rights reserved.</p>
            </div>
        </div>
    </footer>
</template>

<script lang="ts" name="Footer" setup>
import IconMovieRecorder from '@/components/icons/IconMovieRecorder.vue';

</script>