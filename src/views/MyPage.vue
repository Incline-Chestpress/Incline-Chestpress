<template>
  <div>
    <TopBar />
    <Aside />
    <Chart />
    <TodoBox />
  </div>
</template>
<script>
import TopBar from "@/components/TopBar.vue"
import TodoBox from "@/components/TodoBox.vue"
import Aside from "@/components/Aside.vue"
import Chart from "@/components/Chart.vue"

export default {
  components: {
    TodoBox,
    Aside,
    TopBar,
    Chart,
  },
}
</script>
