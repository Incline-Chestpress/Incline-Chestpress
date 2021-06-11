import Vue from "vue"
import VueRouter from "vue-router"
import Status from "../views/Status.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/status",
    name: "Status",
    component: "Status",
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
