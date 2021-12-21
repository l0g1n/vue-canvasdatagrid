<template>
  <div id="app">
    <button @click="test">{{ btnName }}</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      btnName: "canvas-datagrid",
    };
  },
  methods: {
    test() {
      if (this.btnName == "canvas-datagrid") {
        this.$router.push({ path: "/cv" });
        this.btnName = "    back    ";
      } else {
        this.$router.push({ path: "/" });
        this.btnName = "canvas-datagrid";
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
