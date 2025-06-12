<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
    <Header></Header>
    <RouterView />
    <Footer></Footer>
  </div>
</template>

<script lang="ts" setup name="App">
import { RouterLink, RouterView } from 'vue-router'

import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

</script>

<style scoped></style>
