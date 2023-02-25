<template>
  <div class="container">
    <div class="square one">
      <span class="text">ADOBE</span>
    </div>
    <div class="square two">
      <span class="text-small">HTML / CSS / JAVASCRIPT / VUE / WORDPRESS</span>
    </div>
    <div class="square three">
      <span class="text-small">AI TOOLS / ZAPIER / NOTION / SOCIAL MEDIA / PAID ADS</span>
    </div>
    <div class="square four">
      <span class="text">FIGMA</span>
    </div>
  </div>
</template>
<style scoped>
.container {
  display: grid;
  grid-template-areas: 
  "a b"
  "c d";
  grid-template-columns: 1fr, 1fr;
  grid-template-rows: 1fr, 1fr;
  width: 100%;
  height: 100%;
  row-gap: 100px;
}

.square {
  display: grid;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%);
  border-radius: 16px;
  width: 400px;
  min-height: 420px;
  box-sizing: border-box;
}
.one {
  grid-area: a;
}

.text {
  justify-self: center;
  align-self: center;
  font-size: 88px;
  font-weight: 700;
  color: black;
  margin-top: 2rem;
}

.text-small {
  justify-self: center;
  align-self: center;
  text-align: center;
  font-size: 32px;
  font-weight: 700;
  color: black;
  padding: 2rem;
  margin-top: 2rem;

}

.two {
  grid-area: b;
}

.three {
  grid-area: c;
}

.four {
  grid-area: d;
}
</style>