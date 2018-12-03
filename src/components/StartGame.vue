<template>
  <div class="row main-r">
    <div class="col-12 title-p">
      <h1 class="game-title">Battle Cards</h1>
      <div class="divider"></div>
    </div>
    <div class="col-6 offset-3 start-p">
      <router-link class="char-select" to="charSelect">
        <h1 class="game-title-2">Start Game</h1>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "startGame"
};
</script>

<style scoped>
.start-p {
  height: 30vh;
  background-color: rgba(31, 31, 31, 0.6);
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
}

.start-p a {
  text-decoration: none;
}
</style>
