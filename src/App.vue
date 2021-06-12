<template>
  <div id="app">
    7
    <div id="nav">
      <router-link to="/status">Status</router-link>
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

export default {
  components: {
    //   Aside,
    //   Calendar,
    TodoBox,
    //   TopBar,
  },
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
