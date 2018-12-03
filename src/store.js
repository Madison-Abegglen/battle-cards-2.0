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
      api.get('/' + gameId)
        .then(res => {
          console.log("Getting Game:", res.data.data)
          commit('setGame', res.data.data)
        })
        .catch(err => {
          console.log('Error:', err)
        })
    },
    createGame({ commit, dispatch }, game) {
      api.post('', game)
        .then(res => {
          console.log("Creating Game:", res.data.data)
          commit('setGame', res.data.data)
          router.push({ name: 'game', params: { gameId: res.data.id } })
        })
        .catch(err => {
          console.log('Error:', err)
        })
    },
    attack({ commit, dispatch }, payload) {
      api.put('/' + payload.gameId, payload.attackObject)
        .then(res => {
          console.log("We\'ve attacked:", res.data)
          dispatch('getGame', payload.gameId)
        })
    }
  }
})
