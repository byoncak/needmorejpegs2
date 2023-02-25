<script setup>
let props = defineProps({
  title: String,
  desc: String,
  img: String,
});

let image = "/src/assets/" + props.img;
</script>

<template>
  <div class="card">
    <div class="image-container">
      <img :src="image" class="image" />
    </div>
    <div class="footer">
      <h1 class="title">{{ title }}</h1>
      <span class="text">{{ desc }}</span>
    </div>
  </div>
</template>

<style scoped>
.card {
  display: grid;
  grid-template-rows: 80% 20%;
  background-color: whitesmoke;
  border: 1px solid whitesmoke;
  border-radius: 16px;
  width: 100%;
  max-width: 1080px;
  min-width: 400px;
  box-shadow: 0px 8px 80px rgb(86, 86, 86);
  transition: width .3s, box-shadow .3s;
  cursor: pointer;
  justify-content: center;
}

.card:hover {
  transition: width .3s, box-shadow .3s;
  box-shadow: 0px 8px 111px rgb(111, 111, 111), 0px 8px 40px rgb(111, 111, 111);

}

.title {
  line-height: 36px;
  grid-column: 1;
  font-weight: 700;
  font-size: 32px;
  color: black;
  padding: 16px 64px 16px 64px;
  align-self: center;
  justify-self: center;
  flex: 1 1 0px;
}

.text {
  flex: 1 1 0px;
  grid-column: 2;
  text-align: left;
  font-size: 18px;
  padding: 16px 64px 16px 0px;

}
.footer {
  display: flex;
  grid-row: 2;
  height: 100%;
  grid-template-columns: 1fr 1fr;
  background-color: whitesmoke;
  border-radius: 0px 0px 16px 16px;
  align-items: center;
}

.image-container {
  border-radius: 16px;
  width: 100%;
  height: fit-content;
}

.image {
  width: 100%;
  height: auto;
  grid-area: 1;
  overflow: hidden;
  border-radius: 16px;
  object-fit: cover;
}


@media (max-width: 1360px) {
  .text {
    font-size: 14px;
  }
  .title {
    font-size: 23px;
  }
}

@media (max-width: 1080px) {
  .text {
    font-size: 12px;
  }
  .title {
    font-size: 20px;
  }
}
</style>
