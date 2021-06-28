<template>
  <div id="app">
    <link
      href="https://fonts.googleapis.com/css?family=Acme"
      rel="stylesheet"
    />
    <!-- <TopBar /> -->

    <div class="logo">
      <router-link class="to-my-page" to="/myPage">
        <img
          src="@/components/img/Icon3.png"
          height="350px"
          width="300px"
          alt=""
        />
      </router-link>
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
  padding-top: 150px;
}

.logo {
  height: 400px;
  width: 400px;
  /* border: black 2px solid; */
  border-radius: 20%;
  margin: auto;
  /* background: rgba(255, 255, 255, 0.2); */
}
.to-my-page {
  display: block;
  margin: auto;
  height: 300px;
  width: 250px;
}
.to-my-page img {
  margin-top: 50px;
}
body,
html {
  margin: 0;
  padding: 0;
}
</style>
