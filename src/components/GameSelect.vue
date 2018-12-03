<template>
  <div class="row main-r">
    <div class="col-12 title-p">
      <h1 class="game-title">Battle cards</h1>
      <div class="divider"></div>
    </div>

    <div class="col-6 offset-3 subtitle-p">
      <h1 class="form-txt" style="font-size: 2rem">Unleash the horde</h1>

      <b-form @submit.prevent="createGame(gameConfig)">
        <b-form-group class="form-txt" label="Enter Name" label-for="name-input">
          <b-form-input id="name-input" type="text" v-model="gameConfig.playerName" required/>
        </b-form-group>
        <b-form-group class="form-txt" label-for="set-input" label="Select Set">
          <b-form-input id="set-input" type="number" v-model="gameConfig.set" required/>
        </b-form-group>
        <b-button class="form-txt" type="submit">PLAY</b-button>
      </b-form>
    </div>
  </div>
</template>


<script>
// Opponents defaults to 1 if not specified
// Card Images are generated base on game set 1-4

export default {
  name: "GameSelect",
  data() {
    return {
      gameConfig: {
        playerName: "",
        opponents: 1,
        set: 1
      }
    };
  },
  methods: {
    createGame(game) {
      this.$store.dispatch("createGame", game);
    }
  }
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

.form-txt {
  color: white;
  text-transform: uppercase;
  font-weight: bolder;
  font-size: 1rem;
  letter-spacing: 4px;
  font-family: "Abel", sans-serif;
}
</style>
