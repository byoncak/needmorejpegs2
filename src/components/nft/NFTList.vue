<script setup>
import ProjectCard from "@/components/ProjectCard.vue";
import { storeToRefs } from "pinia";
import { useNeedStore } from "@/stores/needStore.js";

let needStore = useNeedStore();

let { filterTags, collections } = storeToRefs(needStore);

let showCollections = () => {};
</script>

<template>
  <div class="project-container">
    <div
      class="collection"
      v-for="collection in collections"
      :key="collection.id"
    >
      <ProjectCard
        v-if="
          filterTags.length === 0 ||
          (filterTags.length === 1 &&
            (filterTags.includes(collection.tags[0]) ||
              filterTags.includes(collection.tags[1]))) ||
          (filterTags.length >= 2 &&
            filterTags.includes(collection.tags[0]) &&
            filterTags.includes(collection.tags[1]))
        "
        :title="collection.title"
        :desc="collection.desc"
        :img="collection.img"
      />
    </div>
  </div>
</template>

<style>
.collection {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  row-gap: 80px;
  width: 100%;
  height: 100%;
}
</style>
