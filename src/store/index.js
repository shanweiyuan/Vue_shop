import Vuex from "vuex"
import Vue from "vue";

Vue.use(Vuex)
//引入小仓库
import home from "@/store/home";
import Login from "@/store/Login";
import Register from "@/store/Register";
import Search from "@/store/Search";

export default new Vuex.Store({
    // state,mutations,actions,getters
    modules:{
        home,Login,Register,Search
    }
})