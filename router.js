import Vue from 'vue'
import Router from 'vue-router'
import login from "./yg/login.vue"
import register from "./yg/register.vue"
import index from "./yg/index.vue"
import details from "./yg/details.vue"


Vue.use(Router)

export default new Router({
  routes: [
    {path:"/",component:index},
    {path:"/index",component:index},
    {path:"/login",component:login},
    {path:"/register",component:register},
    {path:"/details",component:details}
  ]
})
