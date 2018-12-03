import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Main.vue'
import CharSelect from './views/CharSelect.vue'
import Game from './views/Game.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/charSelect',
      name: 'charSelect',
      component: CharSelect
    },
    {
      path: '/game/:gameId',
      name: 'game',
      component: Game
    }
  ]
})
