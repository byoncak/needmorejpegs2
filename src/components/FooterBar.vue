<script setup>
import Icons from "@/components/IconBin.vue";

const scrollTo = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

</script>

<template>
  <div class="container">
    <div class="info">
      <p>brett@bct.studio</p>
      <p>Copyright of needmorejpegs, 2022</p>
      <p>Created with love, by BCT Studio. &nbsp <a class="peace">☮</a></p>
    </div>
    <div class="logo" @click="scrollTo">
      <title>Back to the top.</title>
      <Icons icon="logo" class="icon" />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr, 1fr;
  align-items: center;
  background-color: whitesmoke;
  height: 160px;
  width: 100%;
  padding: 0 8rem 0 8rem;
}

.logo {
  cursor: pointer;
  display: grid;
  justify-content: flex-end;
  align-items: center;
  grid-column: 2;
  width: 100%;
  transition: margin-bottom .3s;
  margin: 16px 0px 0px 16px;
}

.logo:hover {
  margin-bottom: 12px;
  transition: margin-bottom .3s;
}

.icon {
  width: 40px;
}
</style>