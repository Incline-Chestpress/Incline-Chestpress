<template>
  <div class="my-page">
    <TodoBox />
  </div>
</template>
<script>
// import TopBar from "@/components/TopBar.vue"
import TodoBox from "@/components/TodoBox.vue"
// import Aside from "@/components/Aside.vue"

export default {
  components: {
    TodoBox,
    // Aside,
    // TopBar,
  },
}
</script>
<style scoped>
.my-page {
  background-color: rgba(255, 255, 255, 0.2);
  background-blend-mode: lighten;
  background-image: url("../assets/main.jpg");
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100vh;
  padding-top: 20px;
  /* margin-top: 50px; */
}
</style>
