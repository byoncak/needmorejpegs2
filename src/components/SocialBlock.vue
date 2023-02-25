<script setup>
import DiscordIcon from "@/components/icons/DiscordIcon.vue";
import GramIcon from "@/components/icons/GramIcon.vue";
import TezosIcon from "@/components/icons/TezosIcon.vue";
import TwitterIcon from "@/components/icons/TwitterIcon.vue";

const icons = [
  {
    name: "discord",
    component: DiscordIcon,
  },
  {
    name: "twitter",
    component: TwitterIcon,
  },
  {
    name: "gram",
    component: GramIcon,
  },
  {
    name: "tezos",
    component: TezosIcon,
  },
];
</script>

<template>
  <div class="container">
    <h1 class="headline">need more?</h1>
    <div class="social-icons">
      <component
        :is="icon.component"
        v-for="icon in icons"
        :key="icon.name"
        class="icon"
      />
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 0 16rem 0;
}

.headline {
  padding: 2rem 0 4rem 0;
}
.social-icons {
  display: inline-flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
}

.icon {
  padding: 16px;
  cursor: pointer;
  fill: #ffffff;
  height: 88px;
  width: auto;
  transition: filter 1s, margin .5s;
  z-index: 3;
}

.icon:hover {
  filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.815));
  filter: drop-shadow(0 0 16px rgb(255, 255, 255));
  transition: filter .3s, margin .3s;
  margin-top: -16px;
}

.icon:nth-child(3):hover {
  filter: drop-shadow(0 0 16px rgb(255, 255, 255));
  filter: drop-shadow(0 0 8px rgb(255, 255, 255));
}
</style>
