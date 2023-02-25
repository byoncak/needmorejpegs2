<script setup>
import ProjectCard from "@/components/ProjectCard.vue";
import { storeToRefs } from "pinia";
import { useNeedStore } from "@/stores/needStore.js";

let needStore = useNeedStore();

let { projects } = storeToRefs(needStore);
</script>

<template>
  <div class="project-container">
    <div class="projects" v-for="project in projects" :key="project.id">
      <ProjectCard
        :title="project.title"
        :desc="project.desc"
        :img="project.img"
      />
    </div>
  </div>
</template>

<style>
.projects {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  row-gap: 80px;
  width: 100%;
}
</style>
