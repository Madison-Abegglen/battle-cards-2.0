<template>
  <div class="main-r">
    <div v-if="game.players && !game.winner">
      <div class="row attack">
        <div
          class="col-4 offset-4 attack-btn"
          v-if="attackObject.playerId && attackObject.opponentId"
        >
          <button class="c-btn-2" @click="attack">ATTACK</button>
        </div>
      </div>
      <div class="row title" v-for="(player, index) in game.players" :key="player.id">
        <div class="col-12">
          <h1>{{player.name}}</h1>
          <h2>Remaining Cards: {{player.remainingCards}} | Dead Cards: {{player.deadCards.length}}</h2>
        </div>
        <!-- <h1>{{player.hand}}</h1> -->
        <div id="highlight" class="col-2" v-for="card in player.hand" :key="card.id">
          <div class="card" v-if="index == 0">
            <img class="c-img" :src="card.img">
            <p class="c-name">{{card.name}}</p>
            <div class="stats">
              <p class="c-text mg-1">
                <i class="fas fa-plus"></i>
                {{card.health}}
              </p>
              <p class="c-text mg-1">
                <i class="fas fa-shield-alt"></i>
                {{card.defense}}
              </p>
              <p class="c-text mg-1">
                <i class="fas fa-fist-raised"></i>
                {{card.attack}}
              </p>
            </div>
            <b-button class="c-btn" @click="setPlayerCard(card.id, player.id)">Select</b-button>
          </div>

          <div id="highlight" class="card" v-else-if="index == 1 && card.visible == true">
            <img class="c-img" :src="card.img">
            <p class="c-name">{{card.name}}</p>
            <div class="stats">
              <p class="c-text mg-1">
                <i class="fas fa-plus"></i>
                {{card.health}}
              </p>
              <p class="c-text mg-1">
                <i class="fas fa-shield-alt"></i>
                {{card.defense}}
              </p>
              <p class="c-text mg-1">
                <i class="fas fa-fist-raised"></i>
                {{card.attack}}
              </p>
            </div>
            <b-button class="c-btn" @click="setOpponentCard(card.id, player.id)">Select</b-button>
          </div>

          <div id="highlight" class="card" @click="setOpponentCard(card.id, player.id)" v-else>
            <img
              class="c-img-2"
              src="https://ak0.picdn.net/shutterstock/videos/12188810/thumb/9.jpg"
            >
          </div>
        </div>
        <div class="divider"></div>
      </div>
    </div>
    <div class="row" v-else-if="game.winner">
      <div class="col-12 results-title">
        <h1 class="results-text-1">Game Results:</h1>
      </div>
      <div class="col-12 results">
        <h1 class="results-text-2">Winner | {{game.winner.name}}</h1>
        <div class="divider" style="margin: 2rem;"></div>
        <button class="btn btn-secondary" @click="startOver()">play again?</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ActiveGame",
  data() {
    return {
      attackObject: {
        playerId: "",
        playerCardId: "",
        opponentId: "",
        opponentCardId: ""
      }
    };
  },
  mounted() {
    this.$store.dispatch("getGame", this.$route.params.gameId);
  },
  computed: {
    game: function() {
      return this.$store.state.game;
    }
  },
  methods: {
    // consoleCard(card) {
    //   console.log("Card:", card);
    // }
    setPlayerCard(cardId, playerId) {
      document.getElementById("highlight").style.boxShadow = "";
      this.attackObject.playerId = playerId;
      this.attackObject.playerCardId = cardId;
    },
    setOpponentCard(cardId, playerId) {
      document.getElementById("highlight").style.boxShadow = "";
      this.attackObject.opponentId = playerId;
      this.attackObject.opponentCardId = cardId;
    },
    attack() {
      this.$store.dispatch("attack", {
        attackObject: this.attackObject,
        gameId: this.$route.params.gameId
      });
    },
    startOver() {
      let game = {};
      this.$store.dispatch("startOver", game);
    }
  }
};
</script>

<style scoped>
.results-title {
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.results {
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.results-text-1 {
  color: white;
  font-family: "Abel", sans-serif;
  text-transform: uppercase;
  font-weight: bolder;
  letter-spacing: 4px;
}
.results-text-2 {
  color: white;
  font-family: "Abel", sans-serif;
  text-transform: uppercase;
  font-weight: bolder;
  letter-spacing: 4px;
  font-size: 4rem;
}
.attack {
  height: 5vh;
}
.attack-btn {
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.title {
  height: 45vh;
  color: white;
  font-family: "Abel", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-weight: bolder;
  letter-spacing: 4px;
}
.card {
  display: flex;
  flex-direction: column;
  height: 30vh;
  width: 100%;
  background-color: rgb(173, 173, 173);
}
.c-img {
  height: 15vh;
  width: 100%;
}
.c-img-2 {
  height: 30vh;
  width: 100%;
}
.stats {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 5vh;
}
.mg-1 {
  margin-right: 0.5rem;
  margin-left: 0.5rem;
}
.c-name {
  height: 5vh;
  color: black;
  font-family: "Abel", sans-serif;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 1px;
}
.c-text {
  color: black;
  font-family: "Abel", sans-serif;
  text-transform: uppercase;
  font-size: 15px;
  letter-spacing: 1px;
}
.c-btn {
  height: 5vh;
  width: 80%;
  margin-left: 10%;
}
.c-btn-2 {
  height: 5vh;
  width: 80%;
  /* margin-left: 10%; */
}
</style>
