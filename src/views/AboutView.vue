<script setup>
import NavBar from "@/components/NavBar.vue";
import AboutMe from "@/components/about/AboutMe.vue";
import ArrowHead from "@/components/ArrowHead.vue";
import SkillsBlock from "@/components/about/SkillsBlock.vue";
import SocialBlock from "@/components/SocialBlock.vue";
import TechBlock from "@/components/about/TechBlock.vue";
</script>

<template>
  <main class="grid">
    <NavBar class="navbar" />
    <ArrowHead class="header">
      <template #title> about me </template>
    </ArrowHead>
    <AboutMe class="about" />
    <ArrowHead class="header2">
      <template #title> skills in years </template>
    </ArrowHead>
    <SkillsBlock class="skills" />
    <ArrowHead class="header3">
      <template #title> software & tech </template>
    </ArrowHead>
    <TechBlock class="skills"/>
    <SocialBlock class="social" />
  </main>
</template>

<style>
.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 8px;
  max-width: 100vw;
  margin: 0 8rem 0 8rem;
}

.header {
  margin-top: 62vh;
  padding-bottom: 3rem;
  z-index: 2;
  grid-column: 1 / span 12;
}

.header2 {
  margin-top: 4rem;
  padding-bottom: 8rem;
  z-index: 2;
  grid-column: 1 / span 12;
}

.header3 {
  margin-top: 8rem;
  padding-bottom: 4rem;
  z-index: 2;
  grid-column: 1 / span 12;
}

.navbar {
  grid-column: 1 / span 12;
}

.about {
  grid-column: 2 / span 11;
  padding-bottom: 4rem;

}

.skills {
  grid-column: 2 / span 11;
}

.social {
  grid-column: 1 / span 12;
  margin-top: 8rem;
}

@media (max-width: 1140px) {
  .grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    max-width: 100vw;
    margin: 0 4rem 0 4rem;
  }
}

@media (max-width: 980px) {
  .grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    max-width: 100vw;
    margin: 0 2rem 0 2rem;
  }
}
</style>
