<script setup>
import Icons from "@/components/IconBin.vue";
import Menu from "@/components/icons/MenuIcon.vue"

</script>

<template>
  <div class="container">
    <router-link to="/" name="home">
      <Icons icon="logo" class="logo" />
    </router-link>

    <nav class="links">
      <router-link to="nft" name="nft">
        <a>💎 NFTs</a>
      </router-link>
      <router-link to="about" name="about">
        <a>about</a>
      </router-link>
      <router-link to="resume" name="resume">
        <a>resume</a>
      </router-link>
      <router-link to="contact" name="contact">
        <a id="last">contact</a>
      </router-link>
      <div class="menu-button"></div>
    </nav>
  </div>
</template>

<style scoped>
.logo {
  width: 56px;
  fill: white;
  cursor: pointer;
  transition: filter 0.3s;
}

.logo:hover {
  filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.815));
  filter: drop-shadow(0 0 16px rgb(255, 255, 255));
  transition: filter 0.3s;
}

a {
  color: white;
  padding: 0 32px 0 32px;
}

#last {
  padding: 0 0px 0 32px;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 23px 0 23px 0;
  font-size: 23px;
}

a {
  cursor: pointer;
}
a:hover {
  text-shadow: 0 0 8px rgba(255, 255, 255, 0.605),
    0 0 16px rgba(255, 255, 255, 0.428), 0 0 23px white;
}

.menu-button {
  display: none;
}

@media (max-width: 1360px) {
  a {
    padding: 0 23px 0 23px;
  }
  #last{
    padding: 0 0 0 23px;
  }
}

@media (max-width: 1080px) {
  a {
    padding: 0 16px 0 16px;
  }
  #last{
    padding: 0 0 0 16px;
  }
}

@media (max-width: 800px) {
  a {
    padding: 0 12px 0 12px;
  }
  #last{
    padding: 0 0 0 12px;
  }
}

@media (max-width: 576px) {
  a {
    display: none;
  }
  #last{
    padding: 0 0 0 8px;
  }
  .menu-button {
    display: block;
  }
}

</style>
