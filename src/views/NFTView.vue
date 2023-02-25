<script setup>
import NavBar from "@/components/NavBar.vue";
import NFTList from "@/components/nft/NFTList.vue";
import NFTFilter from "@/components/nft/NftFilter.vue";
import ArrowHead from "@/components/ArrowHead.vue";
import SocialBlock from "@/components/SocialBlock.vue";

</script>

<template>
  <main class="grid">
    <NavBar class="navbar" />
    <div class="header-bar">
      <ArrowHead class="header">
        <template #title> collections </template>
      </ArrowHead>
      <NFTFilter class="buttons"/>
    </div>
    <NFTList :filter="filter" class="projects" /> 
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
  flex: 1 1 0px;
  padding: 0px;
  margin-top: 62vh;
}

.header-bar {
  padding-bottom: 3rem;
  z-index: 2;
  display: flex;
  grid-column: 1 / span 12;
  align-items: center;
}

.navbar {
  grid-column: 1 / span 12;
}

.buttons {
  cursor: pointer;
  margin-top: 64vh;
  flex: 1 1 0px;
}


.projects {
  grid-column: 3 / span 8;
}

.social {
  grid-column: 1 / span 12;
}

.icons {
  width: 20px;
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
