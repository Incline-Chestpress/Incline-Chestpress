import Vue from "vue"
import VueRouter from "vue-router"
// import app from "@/App.vue"
import status from "@/views/Status.vue"
import myPage from "@/views/MyPage.vue"
import home from "@/views/Home.vue"
import firebase from "firebase"

Vue.use(VueRouter)

const routes = [
  // {
  //   path: "/app",
  //   name: "app",
  //   component: app,
  // },
  {
    path: "/home",
    name: "home",
    component: home,
  },
  {
    path: "/status",
    name: "status",
    component: status,
  },
  {
    path: "/myPage",
    name: "myPage",
    component: myPage,
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

// Vue Router のグローバルガードで、ログインしてない場合は、BeforeSignInにしか行けなくする。

export default router

let isSignIn = false
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    isSignIn = true
  } else {
    isSignIn = false
  }
})

router.beforeEach((to, from, next) => {
  if (to.name !== "home" && !isSignIn) {
    next({ name: "home" })
  } else {
    next()
  }
})
