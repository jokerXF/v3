<template>
  <div class="wrapper">
    <div>
      <div class="left"><img :src="countInfo.img1" /></div>
      <div class="right">
        <p>{{ countInfo.title1 }}</p>
        <p class="font" :style="countInfo.styleObject">
          {{ countInfo.count1 }}
        </p>
      </div>
    </div>
    <div>
      <div class="left"><img :src="countInfo.img2" /></div>
      <div class="right">
        <p>{{ countInfo.title2 }}</p>
        <p class="font" :style="countInfo.styleObject">
          {{ countInfo.count2 }}
        </p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
export default defineComponent({
  name: "card",
  props: {
    countInfo: {
      type: Object,
      required: true,
      default: function () {
        return {};
      },
    },
  },
});
</script>
<style scoped>
.wrapper {
  width: 100%;
  height: 110px;
  height: 110px;
  background-color: #034c6a;
  color: #ffffff;
  display: grid;
  grid-template-columns: repeat(2, 50%);
}
.left {
  float: left;
  line-height: 110px;
  width: 30%;
  text-align: center;
}
.right {
  float: right;
  text-align: left;
  height: 100%;
  width: 70%;
  padding-top: 22px;
}
.font {
  font-size: 28px;
  font-weight: 600;
}
</style>
