<template>
  <div class="card-chart">
    <div class="title">
      <slot name="title"></slot>
    </div>
    <div :id="id" class="chart"></div>
  </div>
</template>
<script lang="ts">
import * as echarts from "echarts";
import { defineComponent, onMounted, ref, reactive } from "vue";
export default defineComponent({
  name: "cardchart",
  props: {
    chartOptions: {
      type: Object,
      required: true,
    },
    id: {
      type: String,
    },
  },
  setup(props, { slots }) {
    onMounted(() => {
      initChart();
    });
    const initChart = (): void => {
      const myChart = echarts.init(
        document.getElementById(props.id as string) as HTMLElement
      );
      myChart.setOption(props.chartOptions);
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
.chart {
  margin-top: 17px;
  height: 250px;
  width: 100%;
}
</style>
