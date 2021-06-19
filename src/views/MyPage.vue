<template>
  <div>
    <TopBar />
    <Aside />
    <TodoBox />
  </div>
</template>
<script>
import TopBar from "@/components/TopBar.vue"
import TodoBox from "@/components/TodoBox.vue"
import Aside from "@/components/Aside.vue"

export default {
  components: {
    TodoBox,
    Aside,
    TopBar,
  },
}
</script>
