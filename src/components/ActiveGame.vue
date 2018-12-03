<template>
  <div class="row main-r">
    <div>
      <h1>Game Time</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "ActiveGame",
  computed: {
    game: function() {
      return this.$store.state.game;
    }
  }
};
</script>

<style scoped>
</style>
