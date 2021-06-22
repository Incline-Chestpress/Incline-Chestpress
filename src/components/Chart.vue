<template>
  <div>
    <input type="text" v-model="inputValue" />
    <button v-on:click="addData">追加</button>

    <p>{{ inputValue }}</p>
    <Chart :chart-data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
import firebase from "firebase"
import Chart from "@/components/ChartBox.js"

export default {
  components: {
    Chart,
  },
  data() {
    return {
      inputValue: "",
      data: [2, 2, 2, 2, 4, 5, 6, 7],
      // 後程オプションを記述

      chartOptions: {
        maintainAspectRatio: false,
        fill: false,
        scales: {
          xAxes: [
            {
              display: true,
              // X軸グリッド非表示
              gridLines: {
                display: false,
              },
            },
          ],
          // Y軸
          yAxes: [
            {
              display: true,
              position: "right",
              ticks: {
                // 0から始まる
                beginAtZero: true,
                // 最大5目盛
                maxTicksLimit: 5,
              },
            },
          ],
        },
      },
    }
  },

  methods: {
    toDoubleDigits(num) {
      num += ""
      if (num.length === 1) {
        num = "0" + num
      }
      return num
    },
    addData() {
      const addData = +this.inputValue
      const now = new Date()
      const year = now.getFullYear()
      const month = this.toDoubleDigits(now.getMonth() + 1)
      const day = this.toDoubleDigits(now.getDate())
      const hour = this.toDoubleDigits(now.getHours())
      const minute = this.toDoubleDigits(now.getMinutes())
      const date = year + "/" + month + "/" + day + " " + hour + ":" + minute
      this.data.push(addData)
      this.inputValue = ""
      firebase.firestore().collection("weights").add({
        weight: this.data,
        time: date,
      })
    },
  },
  created() {
    firebase
      .firestore()
      .collection("weights")
      .orderBy("time", "desc")
      .limit(1)
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          // this.data.replace({
          //   // id: doc.id,
          //   ...doc.data(),
          // }),
          this.data = doc.data().weight
          console.log(doc.data()), console.log(this.data)
        })
      })
  },
  computed: {
    chartData() {
      const data = {
        labels: [
          "12月",
          "1月",
          "2月",
          "3月",
          "4月",
          "5月",
          "6月",
          "7月",
          "8月",
          "9月",
          "10月",
          "11月",
        ],
        datasets: [
          {
            label: "月ごとの点数",
            data: this.data,
            backgroundColor: "lightblue",
            tension: 0,
            fill: false,
          },
        ],
      }
      return data
    },
  },
}
</script>
