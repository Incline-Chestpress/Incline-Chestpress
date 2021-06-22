<template>
  <div id="app">
    <div id="nav">
      <button v-on:click="signIn">サインイン</button>
      <button v-on:click="signOut">サインアウト</button>
    </div>
    <router-link to="/myPage"> MyPage </router-link>
  </div>
</template>
<script>
// import { defineComponent } from "@vue/composition-api"
import firebase from "firebase"

export default {
  methods: {
    signIn() {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((user) => {
          this.user = user
        })
    },
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.user = null
        })
    },
  },
}
</script>
