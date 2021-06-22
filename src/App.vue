<template>
  <div>
    <Top-Bar />
    <Aside />
    <router-view />
  </div>
</template>
./views/Status.vue

<script>
// import { defineComponent } from "@vue/composition-api"
import Aside from "@/components/Aside.vue"
// import Calendar from "@/components/Calendar.vue"
// import TodoBox from "@/components/TodoBox.vue"
import TopBar from "@/components/TopBar.vue"
// const lineDisplay = document.getElementsByClassName("line-display")

export default {
  components: {
    Aside,
    //   Calendar,
    // TodoBox,
    TopBar,
  },
  data: function () {
    return {
      user: null,

      message: "ラインてすと",
    }
  },
  // computed: {
  //   lineTest: () => {
  //     setTimeout(() => {
  //       console.log(this.message)
  //     }, new Date().setHours(22, 7, 0, 0) - new Date()) // 13時30分に実行
  //     return this.message
  //   },
  // },
}
</script>
