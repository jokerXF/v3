<template>
  <div class="statistical-wrapper" @click="buttonClick()">
    <div class="static">
      <slot name="icon" class="icon"></slot>
      <div><slot class="content"></slot></div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
export default defineComponent({
  name: "statistical",
  emits: {
    "alert-modal": null,
  },
  setup(props, context) {
    const buttonClick = () => {
      context.emit("alert-modal", 1);
    };
    return { buttonClick };
  },
});
</script>
<style scoped>
.statistical-wrapper {
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

.icon {
  padding-right: 6px;
}
.content {
  font-size: 16px;
}
</style>
