// 对api进行统一管理
import requests from './request'


/**
 * 三级联动
 * get
 * 无参数
 * http://gmall-h5-api.atguigu.cn/api/product/getBaseCategoryList
 */
    //发请求
export const reqCategoryList=()=>requests({url:'/product/getBaseCategoryList',method:'get'})



