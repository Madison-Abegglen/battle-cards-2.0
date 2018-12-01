import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Main.vue'
import CharSelect from './views/CharSelect.vue'

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
    }
  ]
})
