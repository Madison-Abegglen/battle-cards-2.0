<template>
  <div class="char-select">
    <div class="char-select-2">
      <div class="container-fluid">
        <gameSelect></gameSelect>
      </div>
    </div>
  </div>
</template>

<script>
import gameSelect from "@/components/GameSelect.vue";

export default {
  name: "charSelect",
  components: {
    gameSelect
  }
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
  opacity: 0.8;
  height: 100vh;
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
</style>

