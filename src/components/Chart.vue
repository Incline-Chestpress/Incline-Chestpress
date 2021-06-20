<template>
  <div>
    <input type="text" v-model="inputValue" />
    <button v-on:click="addData">追加</button>

    <p>{{ inputValue }}</p>
    <Chart :chartData="chartItems" :options="chartOptions" />
  </div>
</template>

<script>
import Chart from "@/components/ChartBox.js"

export default {
  components: {
    Chart,
  },
  data() {
    return {
      inputValue: "",
      chartItems: {
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
            data: [2, 2, 2, 2, 4, 5, 6, 7],
            backgroundColor: "lightblue",
            tension: 0,
            fill: false,
          },
        ],
      },
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
    addData() {
      let adddata = this.inputValue
      this.datasets[0].data.push(adddata)
      this.inputValue = ""
      return this.datasets.data
    },
  },
}
</script>
