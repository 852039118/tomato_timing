import Vue from 'vue'
import Router from 'vue-router'
import Tomato from '@/components/Tomato'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Tomato',
      component: Tomato
    }
  ]
})
