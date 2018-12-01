<template>
  <div class="char-select">
    <div class="char-select-2">
      <div class="container-fluid">
        <div class="row main-r">
          <div class="col-12 title-p">
            <h1 class="game-title">B C | Zombies Edition</h1>
            <div class="divider"></div>
          </div>

          <div class="col-6 offset-3 subtitle-p">
            <h1 style="color: white">char select goes here</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "charSelect",
  components: {}
};
</script>

<style scoped>
.char-select {
  background-image: url("https://media.playstation.com/is/image/SCEA/call-of-duty-black-ops-4-background-art-01-ps4-u-21jun18?$native_nt$");
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.char-select-2 {
  background-image: url("https://thumbs.gfycat.com/GenerousSophisticatedCoelacanth-size_restricted.gif");
  opacity: 0.5;
  height: 100vh;
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
</style>

