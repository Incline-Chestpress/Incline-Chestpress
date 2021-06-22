<template>
  <div id="status">
    <Chart />
  </div>
</template>
<script>
import Chart from "@/components/Chart.vue"

export default {
  components: {
    Chart,
  },
}
</script>

<style scoped>
#status {
  margin-left: 200px;
}
</style>
