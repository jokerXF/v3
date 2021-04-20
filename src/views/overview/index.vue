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
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
import statistical from "../../components/statistical/index.vue";
import card from "../../components/card/index.vue";
//import tcard from "../../components/tcard/index";
export default defineComponent({
  name: "overview",
  components: {
    statistical,
    card,
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
    return {
      cardList,
    };
  },
});
</script>
<style scoped>
.wrapper {
  margin: 22px 4px;
}
/* .icon {
  padding-right: 6px;
}
.content {
  font-size: 16px;
} */
.section2 {
  display: grid;
  grid-template-columns: 33.3% 33.3% 33.3%;
  grid-column-gap: 20px;
  color: #fff;
  width: 98%;
  margin: 0 auto;
  margin-top: -17px;
}
</style>
