<template>
  <div class="wrapper">
    <div class="section1">
      <statistical>
        <template v-slot:icon><span class="icon"> </span></template>
        <template v-slot:default><span> 总体概览</span></template>
      </statistical>
    </div>
    <div class="section2">
      <div v-for="(item, index) in cardList" :key="index">
        <card :countInfo="item"></card>
      </div>
    </div>
    <!-- <div class="section2">
      <div v-for="(item,index) in cardList" :key="index"><tcard :countInfo="item"></tcard></div>
    </div> -->
    <div class="section3">
      <div>
        <cardchart :chartOptions="chartOptions">
          <template v-slot:title
            ><img src="../../assets/title_1.png" /><span
              >车辆类型统计</span
            ></template
          >
        </cardchart>
      </div>
      <div></div>
      <div>
        <CardChart>
          <template v-slot:title
            ><img class="img" src="../../assets/title_4.png" /><span
              >车辆行驶统计</span
            ></template
          ></CardChart
        >
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive, onMounted } from "vue";
import * as echarts from "echarts";
import statistical from "../../components/statistical/index.vue";
import card from "../../components/card/index.vue";
import cardchart from "../../components/card-chart/index.vue";
//import tcard from "../../components/tcard/index";
export default defineComponent({
  name: "overview",
  components: {
    statistical,
    card,
    cardchart,
    //tcard
  },
  setup(props) {
    let cardList = [
      {
        title1: "车辆总数(辆)",
        count1: "12356",
        title2: "车辆使用数(辆)",
        count2: "12356",
        img1: require("../../assets/info_1.png"),
        img2: require("../../assets/info_2.png"),
        styleObject: {
          color: "#ffff43!important",
        },
      },
      {
        title1: "行驶里程总数(km)",
        count1: "12356",
        title2: "行驶里程平均数(km)",
        count2: "12356",
        img1: require("../../assets/info_4.png"),
        img2: require("../../assets/info_5.png"),
        styleObject: {
          color: "#25f3e6!important",
        },
      },
      {
        title1: "行驶时长总数(s)",
        count1: "12356",
        title2: "行驶ihfj平均数(s)",
        count2: "12356",
        img1: require("../../assets/info_6.png"),
        img2: require("../../assets/info_7.png"),
        styleObject: {
          color: "#ff4e4e!important",
        },
      },
    ];
    let option = {
      title: {
        text: "ECharts 入门示例",
      },
      tooltip: {},
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "bar",
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    };
    const chartOptions = reactive(option);
    return {
      cardList,
      chartOptions,
    };
  },
});
</script>
<style scoped>
.wrapper {
  margin: 22px 10px;
  width: 97%;
}
/* .icon {
  padding-right: 6px;
}
.content {
  font-size: 16px;
} */
.section2 {
  display: grid;
  grid-template-columns: 33% 33% 33%;
  grid-column-gap: 20px;
  color: #fff;
  width: 100%;
  margin: 0 auto;
  margin-top: 26px;
  margin-bottom: 22px;
}
.section3 {
  display: grid;
  grid-template-columns: 25% 47% 25%;
  grid-column-gap: 30px;
  color: #fff;
  width: 100%;
  margin: 0 auto;
}
</style>
