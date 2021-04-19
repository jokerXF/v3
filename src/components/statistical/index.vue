<template>
  <div class="wrapper">
    <div class="static">
      <slot name="icon"></slot>
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
export default defineComponent({
  name: "statistical",
});
</script>
<style scoped>
.static {
  width: 150px;
  height: 40px;
  line-height: 40px;
  background-color: #04425f;
  margin-left: 1%;
  padding-left: 20px;
  padding-right: 40px;
  border-radius: 2px;
  box-shadow: 0px 3px 3px #61d2f7;
  color: #25f3e6;
}
</style>
