<script setup>
import { ref } from "vue";

const scrollTo = () => {
  window.scrollTo({
    top: 720,
    behavior: "smooth",
  });
};

let isHovering = ref(false);
</script>

<template>
  <div
    class="header"
    @click="scrollTo(projects)"
    @mouseover="isHovering = true"
    @mouseout="isHovering = false"
  >
    <a class="headline" :class="{ hovering: isHovering }">
      <slot name="title" />
    </a>
    <div class="arrow-down" :class="{ hovering: isHovering }"></div>
  </div>
</template>

<style scoped>
.header {
  display: inline-flex;
  align-items: center;
  gap: 40px;
  cursor: pointer;
  transition: gap 0.5s;
}

.header:hover {
  gap: 16px;
  transition: gap 0.5s;
}

.headline {
  font-family: "Chakra Petch", sans-serif;
  color: white;
}

.hovering {
  filter: drop-shadow(0 0 16px rgb(255, 255, 255));
}

.arrow-down {
  cursor: pointer;
  border-left: 16px solid transparent;
  border-right: 16px solid transparent;
  border-top: 16px solid rgb(255, 255, 255);
  filter: drop-shadow(0 0 10px rgb(255, 255, 255));
}

</style>
