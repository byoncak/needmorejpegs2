<script setup>
import { RouterLink, RouterView } from 'vue-router'
import FooterBar from './components/FooterBar.vue';
import HeroImage from "@/components/HeroImage.vue";

</script>

<template>
  <HeroImage class="hero" />
  <RouterView />
  <FooterBar />
</template>

<style scoped>
.hero {
  position: absolute;
  z-index: -2;
  max-width: 4000px;
  width: 100vw;
}
</style>
