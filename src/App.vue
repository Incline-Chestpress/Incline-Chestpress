<template>
  <div id="app">
    Training day
    <div id="nav">
      <ul>
        <li><router-link to="/status" class="status">Status</router-link></li>
        <li><router-link to="/top" class="top">Top</router-link></li>
        <li><router-link to="/top" class="Setting">Setting</router-link></li>
      </ul>
    </div>
    <router-view />
    <TodoBox></TodoBox>
  </div>
</template>
./views/Status.vue ./views/Status.vue

<script>
// import { defineComponent } from "@vue/composition-api"
// import Aside from "@/components/Aside.vue"
// import Calendar from "@/components/Calendar.vue"
import TodoBox from "@/components/TodoBox.vue"
// import TopBar from "@/components/TopBar.vue"
// const lineDisplay = document.getElementsByClassName("line-display")

export default {
  components: {
    //   Aside,
    //   Calendar,
    TodoBox,
    //   TopBar,
  },
  data: function () {
    return {
      user: null,
      message: "ラインてすと",
    }
  },
  computed: {
    lineTest: () => {
      setTimeout(() => {
        console.log(this.message)
      }, new Date().setHours(22, 7, 0, 0) - new Date()) // 13時30分に実行
      return this.message
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  color: #000000;
  /* 背景画像 */
  background-image: url("./assets/main.jpg");
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100vh;
}
#nav {
  padding: 30px;
}
/* ポジションfixed */
#nav a {
  font-weight: bold;
  color: #979797;
}

#nav a.router-link-exact-active {
  color: #bdbdbd;
}
ul {
  width: 200px;
  margin: 0;
  padding: 0;
  list-style-type: none;
  background-color: #000000;
}
li a {
  display: block;
  padding: 8px 16px;
  text-decoration: none;
  color: #000000;
}
li {
  text-align: center;
}
li:last-child {
  border-bottom: none;
}
li a.active {
  color: #ffffff;
  background-color: #da3c41;
}
/* マウスオーバー */
li a:hover:not(.active) {
  color: #ffffff;
  background-color: #bebebe;
}
body,
html {
  margin: 0;
  padding: 0;
}
</style>
