import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: {template :"<table></table>"}
  }
]

export default new Router({
  routes: routes
})