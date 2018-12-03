<template>
  <div class="main-r" v-if="game.players">
    <div class="row attack">
      <div
        class="col-4 offset-4 attack-btn"
        v-if="attackObject.playerId && attackObject.opponentId"
      >
        <button class="c-btn-2" @click="attack">ATTACK</button>
      </div>
    </div>
    <div class="row title" v-for="(player, index) in game.players" :key="player.id">
      <div class="divider"></div>
      <div class="col-12">
        <h1>{{player.name}}</h1>
        <h2>Remaining Cards: {{player.remainingCards}}</h2>
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
          <img class="c-img-2" src="https://ak0.picdn.net/shutterstock/videos/12188810/thumb/9.jpg">
        </div>
      </div>
      <div class="divider"></div>
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
      this.attackObject.playerId = "";
      this.attackObject.playerCardId = "";
      this.attackObject.opponentId = "";
      this.attackObject.opponentCardId = "";
    }
  }
};
</script>

<style scoped>
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
  height: 10vh;
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
