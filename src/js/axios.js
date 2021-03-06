import axios from 'axios'
import qs from 'qs'

axios.defaults.timeout = 10000;                        //响应时间
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';           //配置请求头
axios.defaults.headers.get['Content-Type'] = 'application/json;charset=UTF-8';           //配置请求头
axios.defaults.baseURL = "http://47.106.85.0";   //配置接口地址
axios.interceptors.request.use((config) => {
    //在发送请求之前做某件事
    if (config.method === 'post') {
      config.data = qs.stringify(config.data);
    }
    return config;
  }, (error) => {
    return Promise.reject(error);
  });
  //返回状态判断(添加响应拦截器)
axios.interceptors.response.use((res) => {
    //对响应数据做些事
    if (!res.status == 200) {
      // _.toast(res.data.msg);
      return Promise.reject(res);
    }
    return res;
  }, (error) => {
    return Promise.reject(error);
  });
  //返回一个Promise(发送post请求)
export function fetch(url, params) {
    return new Promise((resolve, reject) => {
      axios.post(url, params)
        .then(response => {
          resolve(response.data);
        }, err => {
          reject(err);
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
//返回一个Promise(发送get请求)
export function get(url, params) {
    return new Promise((resolve, reject) => {
      axios.get(url, {params: params})
        .then(response => {
          resolve(response.data);
        }, err => {
          reject(err);
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
  //通过传递API调取接口
  export default{
    index(params){
      return get("/index/page",params)
    },
    buyPage(pareams) {
      return fetch('/buy/buys',pareams)
    },
    findPage(pareams) {
      return fetch('/find/finds',pareams)
    }
  }
