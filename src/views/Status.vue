<template>
  <div id="status">
    <Chart />
    <!-- <TopBar />
    <Aside /> -->
  </div>
</template>
<script>
// import TopBar from "@/components/TopBar.vue"
// import Aside from "@/components/Aside.vue"
import Chart from "@/components/Chart.vue"
export default {
  components: {
    // Aside,
    // TopBar,
    Chart,
  },
}
</script>

<style scoped>
#status {
  margin-left: 200px;
  background-color: rgba(255, 255, 255, 0.2);
  background-blend-mode: lighten;
  background-image: url("../assets/status.jpg");
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 100vh;
}
</style>
