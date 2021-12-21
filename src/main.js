import Vue from "vue";
import App from "./App.vue";
import "canvas-datagrid";
import VueRouter from "vue-router";
import CV from "@/components/CV";

Vue.config.productionTip = false;
Vue.config.ignoredElements = ["canvas-datagrid"];

const routes = [
  {
    path: "/",
  },
  {
    path: "/cv",
    name: "cv",
    component: CV,
  },
];

const router = new VueRouter({
  routes,
});

Vue.use(VueRouter);
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
