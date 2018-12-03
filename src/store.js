import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router'

Vue.use(Vuex)

let api = Axios.create({
  baseURL: 'https://inspire-server.herokuapp.com/cards',
  timeout: 3000
})

export default new Vuex.Store({
  state: {
    game: {}
  },
  mutations: {
    setGame(state, game) {
      state.game = game;
    }
  },
  actions: {
    getGame({ commit, dispatch }, gameId) {
      let game = this.state.game;
      api.get('/:id' + game._id)
        .then(res => {
          console.log(res.data)
          commit('setGame', res.data)
        })
        .catch(err => {
          console.log('Error:', err)
        })
    },
    createGame({ commit, dispatch }, game) {
      api.post('', game)
        .then(res => {
          console.log(res.data)
          commit('setGame', res.data)
          router.push({ name: 'game' })
        })
        .catch(err => {
          console.log('Error:', err)
        })
    },
  }
})
