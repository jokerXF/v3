<template>
  <div class="wrapper">
    <div class="header">
      <div class="left">
        <ul>
          <li
            v-for="(item, index) of reactiveLeft"
            :key="index"
            :class="{ active: selected == item.index }"
            @click="setActive(item.index, item.url)"
          >
            <img :src="item.img" /><a>{{ item.title }}</a>
          </li>
        </ul>
      </div>
      <div class="center">
        <p class="title">xx区智慧旅游综合服务平台（佐佑资源）</p>
        <p>Comprehensive service platform for smart tourism</p>
      </div>
      <div class="right">
        <ul>
          <li
            style="float: right"
            v-for="(item, index) of reactiveRight"
            :key="index"
            :class="{ active: selected == item.index }"
            @click="setActive(item.index, item.url)"
          >
            <img :src="item.img" /><a>{{ item.title }}</a>
          </li>
        </ul>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
import { useRouter, useRoute } from "vue-router";
import data from "./travel.data";
export default defineComponent({
  setup() {
    const router = useRouter();
    const route = useRoute();
    const reactiveLeft = reactive(data.left);
    const reactiveRight = reactive(data.right);
    const isActive = ref(0);
    let selected = ref(0);
    const setActive = (index: number, url: string): void => {
      selected.value = index;
      router.push({
        path: url,
        query: {},
      });
    };
    return { reactiveLeft, isActive, selected, setActive, reactiveRight };
  },
});
</script>
<style scoped>
.wrapper {
  /* color: #ffffff; */
}
.header {
  display: grid;
  grid-template-columns: 35% 30% 35%;
  width: 100%;
  height: 80px;
  background-color: #030829;
  color: #ffffff;
}
ul {
  margin: 0;
  padding: 0;
  list-style: none;
  line-height: 80px;
  text-decoration: none;
}
ul li {
  height: 50px;
  line-height: 50px;
  margin-top: 20px;
  display: inline-block;
  width: 120px;
  text-align: center;
  box-sizing: border-box;
  border-radius: 5px;
  margin-left: 8px;
}
ul li:hover {
  box-shadow: -10px 0px 15px #034c6a inset;
}
ul li a {
  padding-left: 6px;
  color: #ffffff;
}

.active {
  border-bottom: 4px solid #4b8df8;
  box-shadow: -10px 0px 15px #034c6a inset;
}
.center {
  text-align: center;
  height: 80px;
  background-image: url(../../assets/logoBg.png);
  background-size: 100% 100%;
  background-size: cover;
  font-family: 微软雅黑 !important;
  margin: 0px auto;
}

.center p.title {
  font-size: 20px;
  margin-top: 7px;
  margin-bottom: 2px;
  margin-left: 40px;
}
</style>
