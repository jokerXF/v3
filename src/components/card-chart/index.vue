<template>
  <div class="card-chart">
    <div class="title">
      <slot name="title"></slot>
    </div>
    <div id="myChart" class="chart"></div>
  </div>
</template>
<script lang="ts">
import * as echarts from "echarts";
import { defineComponent, onMounted, ref, reactive } from "vue";
export default defineComponent({
  name: "cardchart",
  props: {
    options: {
      type: Object,
      required: true,
    },
  },
  setup(props, { slots }) {
    onMounted(() => {
      initChart();
    });
    const initChart = () => {
      let myChart = echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption(props.options);
    };
    return { initChart };
  },
});
</script>
<style scoped>
.card-chart {
  width: 100%;
  height: 280px;
  border: 1px solid #034c6a;
  box-sizing: border-box;
  position: relative;
  margin-top: 25px;
  box-shadow: -10px 0px 15px #034c6a inset, 0px -10px 15px #034c6a inset,
    10px 0px 15px #034c6a inset, 0px 10px 15px #034c6a inset;
}
.title {
  width: 60%;
  height: 35px;
  line-height: 35px;
  border-radius: 15px;
  position: absolute;
  top: -17px;
  left: 17%;
  background-color: #034c6a;
  text-align: center;
}
.img {
  padding-right: 8px !important;
}
.chart {
  margin-top: 17px;
  height: 250px;
  width: 100%;
}
span {
  margin-left: 10px;
}
</style>
