<template>
  <div class="container">
    <div class="prof-pic">
      <img class="image" src="/src/assets/ProfPic.png">
    </div>
    <div class="text-container">
      <p class="text">
        Hey! 👋 I’m Brett.
        <br><br>
        I’ve been designing for 10+ years
        <br> 
        and never once thought,
        <br><br>
        “Damn, this sucks ...”
        <br><br>
        That’s how I know it’s my passion!
      </p>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 50% 50%;
  width: 100%;
  align-items: center ;
}

.prof-pic {
  grid-column: 1;
  width: 100%;
  height: auto;
}

.image {
  object-fit: contain;
}

.text-container {
  grid-column: 2;
  line-height: 1.2;
}

.text {
  font-size: 24px;
  color: whitesmoke;
}
</style>