import Vue from "vue"
import VueRouter from "vue-router"
import BeforeSignIn from "@/views/BeforeSignIn.vue"
import AfterSignIn from "@/views/AfterSignIn.vue"
import Status from "@/views/Status.vue"
import MyPage from "@/views/MyPage.vue"
import firebase from "firebase"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect: "/BeforeSignIn",
  },
  {
    path: "/BeforeSignIn",
    name: "BeforeSignIn",
    component: BeforeSignIn,
  },
  {
    path: "/AfterSignIn",
    name: "AfterSignIn",
    component: AfterSignIn,
  },
  {
    path: "/status",
    name: "Status",
    component: Status,
  },
  {
    path: "/MyPage",
    name: "Mypage",
    component: MyPage,
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

// Vue Router のグローバルガードで、ログインしてない場合は、BeforeSignInにしか行けなくする。

let isSignedIn = () => {
  return firebase.auth().currentUser
}

router.beforeEach((to, from, next) => {
  if (to.name !== "BeforeSignIn" && !isSignedIn()) {
    next("/BeforeSignIn")
  } else {
    next()
  }
})

export default router
