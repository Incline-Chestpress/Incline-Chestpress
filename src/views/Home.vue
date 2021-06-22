<template>
  <div id="app">
    <link
      href="https://fonts.googleapis.com/css?family=Acme"
      rel="stylesheet"
    />
    <!-- <TopBar /> -->
    <div class="to-my-page">
      <router-link to="/myPage"> MyPage </router-link>
    </div>
  </div>
</template>
<script>
// import { defineComponent } from "@vue/composition-api"
// import TopBar from "@/components/TopBar.vue"

export default {
  components: {
    // TopBar,
  },
}
</script>

<style>
#app {
  font-family: acme;
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* 背景画像 */
  /* opacity: 0.7; */
  background-color: rgba(255, 255, 255, 0.2);
  background-blend-mode: lighten;
  background-image: url("../assets/logIn.jpg");
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100vh;
}

body,
html {
  margin: 0;
  padding: 0;
}
</style>
