<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import SolanaIcon from "@/components/icons/SolanaIcon.vue";
import OneOfOneIcon from "@/components/icons/OneOfOneIcon.vue";
import TezosIcon from "@/components/icons/TezosIcon.vue";
import EditionsIcon from "@/components/icons/EditionsIcon.vue";
import { useNeedStore } from "@/stores/needStore.js";

let needStore = useNeedStore();

let { filterTags } = storeToRefs(needStore);

let icons = [
  {
    name: "solana",
    component: SolanaIcon,
  },
  {
    name: "tezos",
    component: TezosIcon,
  },
  {
    name: "1of1",
    component: OneOfOneIcon,
  },
];

const addRemoveTag = (tag) => {
  needStore.addFilterTag(tag);
  console.log(filterTags.value);
};
</script>

<template>
  <div class="container">
    <div class="icon-container" v-for="icon in icons" :key="icon.name">
      <component
        :is="icon.component"
        class="icon"
        :class="{ clicked: filterTags.includes(icon.name) }"
        @click="
          addRemoveTag(icon.name);
        "
      />
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon-container {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
}
.icon {
  padding: 16px;
  cursor: pointer;
  fill: #ffffff;
  max-height: 80px;
  width: auto;
  transition: filter 1s, margin 0.5s;
  z-index: 3;
}

.clicked {
  filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.815));
  filter: drop-shadow(0 0 16px rgb(255, 255, 255));
}

.icon:hover {
  transition: filter 0.3s, margin 0.3s;
  margin-top: -16px;
}
</style>
