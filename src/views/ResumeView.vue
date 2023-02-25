<script setup>
import NavBar from "@/components/NavBar.vue";
import ArrowHead from "@/components/ArrowHead.vue";
import SocialBlock from "@/components/SocialBlock.vue";
import ResumeBlock from "@/components/resume/ResumeBlock.vue";
</script>

<template>
  <main class="grid">
    <NavBar class="navbar" />
    <div class="header-bar">
      <ArrowHead class="header">
        <template #title> resume </template>
      </ArrowHead>
      <div class="button">
        <span class="button-text">👁 View as Google Doc</span>
      </div>
    </div>
    <div class="resume-container">
    <ResumeBlock class="resume-block" />
  </div>
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

.resume-container {
  display: grid;
  justify-content: center;
  align-items: center;
  grid-column: 1 / span 12;

}
.resume-block {
  padding-bottom: 4rem;
}

.social {
  grid-column: 1 / span 12;
}

.button {
  cursor: pointer;
  margin-top: 64vh;
  flex: 0.5 0.5 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  height: 48px;
  background-color: white;
  grid-column: 9 / span 4;
  transition: height .3s, filter .3s;
}

.button:hover {
  filter: drop-shadow(0 0 16px rgb(255, 255, 255));
  height: 64px;
  transition: height .3s, filter .3s;
}

.button-text {
  padding: 8px 16px 8px 16px;
  font-size: 18px;
  font-weight: 700;
  color: black;
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
