//对于axios进行二次封装
import axios from "axios";

//引入进度条
import nprogress from 'nprogress';
import "nprogress/nprogress.css";
// console.log(nprogress)

//1.利用axios方法创建对象，
const requests=axios.create({
    //配置对象
    baseURL:"/api",
    timeout:5000,
})

// 请求拦截器
requests.interceptors.request.use((config)=>{
    nprogress.start();
    setTimeout(()=>{

        nprogress.done();
    },5000)


    return config;
})

//相应拦截器
requests.interceptors.response.use((res)=>{
    //服务器成功
    return res.data;
},(err)=>{
    return Promise.reject(new Error('error'))
});

export default requests;