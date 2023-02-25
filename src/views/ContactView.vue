<script setup>
import NavBar from "@/components/NavBar.vue";
import ArrowHead from "@/components/ArrowHead.vue";
import SocialBlock from "@/components/SocialBlock.vue";

</script>

<template>
  <main class="grid">
    <NavBar class="navbar" />
    <ArrowHead class="header">
      <template #title>
        contact
      </template>
    </ArrowHead>
    <div class="info">
      <p>I’m easy to contact.</p> 
      <p>Just shoot me an email: *</p>
      <br><br>
      <h1>brett@bct.studio</h1>

      <a href="https://calendly.com/bctstudio/discovery" target="_blank">Or schedule a call here.</a>
      <br><br><br>
      <p class="note">*I don't answer phone calls or texts from unknown numbers.</p>
      <p class="note">Please email me first or schedule by clicking the link above.</p>
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

.note{
  color: gray;
}
h1 {
  color: white;
  font-size: 32px;
}
p {
  color: white;
  font-size: 16px;
}

a {
  color: rgb(127, 180, 255);
  font-size: 16px;
  text-decoration: underline;
  letter-spacing: 1px;
}
.header {
  margin-top: 62vh;
  padding-bottom: 3rem;
  z-index: 2;
  grid-column: 1 / span 12 ;
}

.info {
  grid-column: 3 / span 8 ;

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
