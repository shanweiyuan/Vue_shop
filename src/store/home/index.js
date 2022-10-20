import {reqCategoryList} from "@/api";
//Home模块的小仓库

// state：仓库存储数据的地方
const state = {
    categoryList:[]
};
// mutations修改state的唯一手段
const mutations = {
    CATEGORYLIST(state,categoryList){
        state.categoryList=categoryList;
    }
};

// action：业务逻辑
const actions = {
    // 通过api里面的接口函数调用
    async categoryList({commit}){
        let result=await reqCategoryList();
        console.log(result)
        if(result.code==200){
            commit("CATEGORYLIST",result.data)
        }
    }
    // categoryList(){
    //     let res=reqCategoryList();
    //     console.log(res)
    // }
};
//getters：计算属性
const getters = {};

export default {
    state, mutations, actions, getters
}