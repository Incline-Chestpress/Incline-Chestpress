<template>
  <div class="header">
    <link
      href="https://fonts.googleapis.com/css?family=Acme"
      rel="stylesheet"
    />
    <h2>Training Day</h2>
    <!-- {{ user }} -->
    <nav>
      <button id="sign-out-button" v-if="user" v-on:click="signOut">
        <span>▶️</span> Sign Out
      </button>
      <button id="sign-in-button" v-else v-on:click="signIn">
        <span>▶️</span> Sign In
      </button>
    </nav>
  </div>
</template>
<script>
import firebase from "firebase"
export default {
  data() {
    return {
      user: null,
    }
  },
  methods: {
    signIn() {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((user) => {
          this.user = user
        })
      //   console.log(user)
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
<style scoped>
.header {
  background: white;
  height: 50px;
  opacity: 0.6;
  font-family: acme;
}
.header h2 {
  text-align: center;
  margin: 0;
  line-height: 50px;
}
.header nav {
  position: fixed;
  right: 20px;
  top: 8px;
}
.header nav button {
  /* background: black; */
  background: white;
  opacity: 0.9;
  border-radius: 5px;
  padding: 6px 9px;
  color: black;
  font-size: 14px;
  font-family: acme;
}
.header nav button span {
  font-size: 12px;
}
.header nav button:hover {
  cursor: pointer;
  /* background: ; */
}
</style>
