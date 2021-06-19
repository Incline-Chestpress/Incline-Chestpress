import Vue from "vue"
import VueRouter from "vue-router"
import app from "@/App.vue"
import status from "@/views/Status.vue"
import myPage from "@/views/MyPage.vue"
import firebase from "firebase"

Vue.use(VueRouter)

const routes = [
  {
    path: "/app",
    name: "app",
    component: app,
  },
  {
    path: "/status",
    name: "Status",
    component: status,
  },
  {
    path: "/MyPage",
    name: "Mypage",
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
  if (to.name !== "app" && !isSignIn) {
    next({ name: "app" })
  } else {
    next()
  }
})
