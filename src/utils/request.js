import axios from "axios";
import Nprogress from "nprogress";
import "nprogress/nprogress.css";
import getUid from "./uid";
const messages = {
  401: "未知错误",
  403: "禁止访问",
  404: "资源未找到",
  500: "服务器错误",
};
//创建一个axios的实例
//这个request功能和axios基本一致
const request = axios.create({
  baseURL: "/api", //基础路径：公共请求地址前缀
  headers: {
    timeout: 1000, //请求的超时时间，请求超时10000ms没有响应，就自动终止请求
  },
});

//设置拦截器
//请求拦截器
// uuidv4()要定义在外面因为拦截器执行一次
// const uid = uuidv4();
request.interceptors.request.use(
  (config) => {
    console.log(111);
    //config是请求的配置对象，将来发送请求的配置都是从config中读取
    //请求成功不代表功能成功
    config.headers.userTempId = getUid();

    Nprogress.start();
    return config;
  },
  () => {
    //请求失败的回调
    console.log(2222);
  }
);
//响应拦截器
request.interceptors.response.use(
  (request) => {
    console.log(333);
    Nprogress.done();
    if (request.data.code === 200) {
      return request.data.data;
    } else {
      //返回错误的信息
      return Promise.reject(request.data.message || "未知错误，请联系管理员");
    }
  },
  //响应失败的回调
  (error) => {
    let message = "未知错误";
    Nprogress.done();
    console.dir(error);
    if (error.response) {
      message = messages[error.response.status];
      // if (error.response.status === 401) {
      //   message = "未授权";
      // } else if (error.response.status === 403) {
      //   message = "禁止访问";
      // } else if (error.response.status === 404) {
      //   message = "资源未找到";
      // } else if (error.response.status === 500) {
      //   message = "服务器错误";
      // }
    } else {
      //如果检测有timeout这个属性就就报网路超时
      if (error.message.indexOf("timeout") > -1) {
        message = "网络超时";

        //如果检测有Network这个属性就就报断网了
      } else if (error.message.indexOf("Network") > -1) {
        message = "没有网络";
      }
      console.log(444);
      console.log(error);
      return Promise.reject(message); //响应失败的
    }
  }
);

//暴露出去
export default request;
