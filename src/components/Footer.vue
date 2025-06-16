<template>
  <footer class="py-12 text-white bg-gray-900">
    <div class="container px-4 mx-auto">
      <div class="grid gap-8 md:grid-cols-4">
        <div>
          <div class="flex items-center mb-4 space-x-2">
            <div class="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl">
              <IconMovieRecorder />
            </div>
            <h3 class="text-xl font-bold">MovieFinder</h3>
          </div>
          <p class="text-gray-400">
            {{ $t("footer.description") }}
          </p>
        </div>
        <div>
          <h4 class="mb-4 font-semibold">{{ $t("footer.quickLinks") }}</h4>
          <ul class="space-y-2 text-gray-400">
            <li>
              <a href="#" class="transition-colors hover:text-white">{{
                $t("footer.popularMovies")
              }}</a>
            </li>
            <li>
              <a href="#" class="transition-colors hover:text-white">{{
                $t("footer.popularTVShows")
              }}</a>
            </li>
            <li>
              <a href="#" class="transition-colors hover:text-white">{{
                $t("footer.comingSoon")
              }}</a>
            </li>
            <li>
              <a href="#" class="transition-colors hover:text-white">{{
                $t("footer.topCharts")
              }}</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 class="mb-4 font-semibold">{{ $t("footer.categories") }}</h4>
          <ul class="space-y-2 text-gray-400">
            <li>
              <a href="#" class="transition-colors hover:text-white">{{ $t("footer.action") }}</a>
            </li>
            <li>
              <a href="#" class="transition-colors hover:text-white">{{ $t("footer.comedy") }}</a>
            </li>
            <li>
              <a href="#" class="transition-colors hover:text-white">{{ $t("footer.sciFi") }}</a>
            </li>
            <li>
              <a href="#" class="transition-colors hover:text-white">{{ $t("footer.horror") }}</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="mb-4 font-semibold">{{ $t("footer.aboutUs") }}</h4>
          <ul class="space-y-2 text-gray-400">
            <li>
              <a href="#" class="transition-colors hover:text-white">{{
                $t("footer.contactUs")
              }}</a>
            </li>
            <li>
              <a href="#" class="transition-colors hover:text-white">{{
                $t("footer.privacyPolicy")
              }}</a>
            </li>
            <li>
              <a href="#" class="transition-colors hover:text-white">{{
                $t("footer.termsOfService")
              }}</a>
            </li>
            <li>
              <a href="#" class="transition-colors hover:text-white">{{ $t("footer.faq") }}</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="pt-8 mt-8 text-center text-gray-400 border-t border-gray-800">
        <p>&copy; 2025 MovieFinder. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" name="Footer" setup>
import IconMovieRecorder from "@/components/icons/IconMovieRecorder.vue";
</script>
