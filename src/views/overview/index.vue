<template>
  <div class="wrapper">
    <div class="section1">
      <statistical @alert-modal="test($event)">
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
        <cardchart :chartOptions="chartOptions1" id="car">
          <template v-slot:title
            ><img src="../../assets/title_1.png" /><span
              >车辆类型统计</span
            ></template
          >
        </cardchart>
      </div>
      <div></div>
      <div>
        <cardchart1 :chartOptions="chartOptions2" id="cart">
          <template v-slot:title
            ><img src="../../assets/title_4.png" /><span
              >车辆行驶统计</span
            ></template
          >
        </cardchart1>
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
import cardchart1 from "../../components/card-chart/index.vue";
//import tcard from "../../components/tcard/index";
export default defineComponent({
  name: "overview",
  components: {
    statistical,
    card,
    cardchart,
    cardchart1,
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
    let option1 = {
      tooltip: {
        trigger: "item",
      },
      legend: {
        top: "5%",
        left: "right",
        textStyle: {
          color: "#fff",
        },
        orient: "horizontal",
      },
      series: [
        {
          name: "访问来源",
          type: "pie",
          radius: ["40%", "70%"],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: "center",
          },
          emphasis: {
            label: {
              show: true,
              fontSize: "40",
              fontWeight: "bold",
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 1048, name: "搜索引擎" },
            { value: 735, name: "直接访问" },
            { value: 580, name: "邮件营销" },
            { value: 484, name: "联盟广告" },
            { value: 300, name: "视频广告" },
          ],
        },
      ],
    };

    let option2 = {
      title: {
        text: "ECharts 入门示例",
      },
      tooltip: {},
      xAxis: {
        data: ["香蕉", "火龙果", "血橙", "耙耙柑", "苹果", "菠萝"],
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "bar",
          data: [5, 20, 16, 10, 10, 20],
        },
      ],
    };
    const chartOptions1 = reactive(option1);
    const chartOptions2 = reactive(option2);
    function test($event) {
      console.log($event);
    }
    return {
      cardList,
      chartOptions1,
      chartOptions2,
      test,
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
