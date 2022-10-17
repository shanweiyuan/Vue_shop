import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
import Home from "@/pages/Home";
import Search from "@/pages/Search";
import Login from "@/pages/Login";
import Register from "@/pages/Register";

export default new VueRouter({
    //配置路由
    routes:[
        {
            path:"/home",
            component:Home,
            mate:{
                // show:true
            }
        },
        {
            name:'search',
            path:"/search/:keyword",
            component:Search,
            mate:{
                show:true
            }
        },
        {
            path:"/login",
            component:Login,
            mate:{
                show:true
            }
        },
        {
            path:"/register",
            component:Register,
            mate:{
                // show:true
            }
        },
        //重定向，在项目跑起来的时候，访问/，立马让他定向到Home
        {
            path:'*',
            redirect:"/Home"
        }
    ]
})