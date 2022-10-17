import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
//三级联动组件，全局组件
import TypeNav from "@/pages/Home/TypeNav/TypeNav";
import {reqCategoryList} from "@/api";
reqCategoryList();
Vue.config.productionTip = false
//第一个参数：全局组件名字， 第二个参数：哪一个组件
Vue.component(TypeNav.name,TypeNav)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
