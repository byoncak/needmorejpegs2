<template>
  <div class="container">
    <div class="square one">
      <span class="title">graphic design</span>
      <span class="years">10</span>
    </div>
    <div class="square two">
      <span class="title">web / dev</span>
      <span class="years">1.5</span>
    </div>
    <div class="square three">
      <span class="title">marketing</span>
      <span class="years">4</span>
    </div>
    <div class="square four">
      <span class="title">ui / ux</span>
      <span class="years">2</span>
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
  grid-template-rows: 1fr, 1fr;
  box-sizing: border-box;
}
.one {
  grid-area: a;
}

.title {
  font-size: 40px;
  color: whitesmoke;
  justify-self: center;
  grid-rows: 1;
  margin-top: -2rem;
}

.years {
  justify-self: center;
  align-self: center;
  grid-rows: 2;
  font-size: 160px;
  font-weight: 700;
  color: black;
  margin-top: -4rem;
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