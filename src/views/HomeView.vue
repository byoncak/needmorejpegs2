<script setup>
import NavBar from "@/components/NavBar.vue";
import ProjectList from "@/components/home/ProjectList.vue";
import ArrowHead from "@/components/ArrowHead.vue";
import SocialBlock from "@/components/SocialBlock.vue";

</script>

<template>
  <main class="grid">
    <NavBar class="navbar" />
    <ArrowHead class="header">
      <template #title>
        projects
      </template>
    </ArrowHead>
    <ProjectList class="projects" /> 
    <SocialBlock class="social" />
  </main>
</template>

<style scoped>
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
  grid-column: 1 / span 12 ;
}

.navbar {
  grid-column: 1 / span 12;
}

.projects {
  grid-column: 3 / span 8;
}

.social {
  grid-column: 1 / span 12;
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
