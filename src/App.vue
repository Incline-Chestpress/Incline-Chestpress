<template>
  <div>
    <router-view />
  </div>
</template>
./views/Status.vue

<script>
// import Aside from "@/components/Aside.vue"
// import Calendar from "@/components/Calendar.vue"
// import TopBar from "@/components/TopBar.vue"
// import firebase from "firebase"
// import myPage from "@/views/MyPage.vue"
// import home from "@/views/Home.vue"

export default {
  data() {
    return {
      user: null,
    }
  },
  components: {
    // myPage,
    // home,
  },
  // mounted() {},
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
