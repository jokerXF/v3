<template>
  <div>
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->

    <!-- <router-link to="/">Go to Home</router-link>
  <router-link to="/about">Go to About</router-link>  -->
    <!-- <layout/> -->
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { useRouter, useRoute } from "vue-router";
import layout from "./layout/layout.vue";
import { defineComponent } from "vue";
// import HelloWorld from "./components/HelloWorld.vue";

export default defineComponent({
  name: "App",
  comments: {
    layout,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    function pushWithQuery() {
      router.push({
        name: "/",
      });
    }
    return { pushWithQuery };
  },
});
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
