<template>
  <div class="wrapper">
    <div class="section1">
      <statistical>
        <template v-slot:icon
          ><span class="icon"> <a-icon type="bar-chart" /></span
        ></template>
        <template v-slot:default
          ><span class="content"> 总体概览</span></template
        >
      </statistical>
    </div>
    <div class="section2">
      <div><card></card></div>
      <div>2</div>
      <div>3</div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
import statistical from "../../components/statistical/index.vue";
import card from "../../components/card/index.vue";
export default defineComponent({
  name: "overview",
  components: {
    statistical,
    card,
  },
});
</script>
<style scoped>
.wrapper {
  margin: 22px 4px;
}
.icon {
  padding-right: 6px;
}
.content {
  font-size: 16px;
}
.section2 {
  display: grid;
  grid-template-columns: 33.3% 33.3% 33.3%;
  color: #fff;
}
</style>
