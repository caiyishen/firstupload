import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
import store from '@/store'
import {ACCESS_TOKEN} from '@/store/mutation-types'
import { Notification } from 'ant-design-vue';
import {router} from '@/router'
Vue.use(Notification);
//创建实例
const baseURL = process.env.VUE_APP_BASE_HOST
// console.log(baseURL,'baseUrl')
const service = axios.create({
  baseURL,
  timeout:30000
})
//请求拦截
service.interceptors.request.use(config=>{
  const token  = localStorage.getItem(ACCESS_TOKEN)
  if(token){
    config.headers['X-Access-Token'] = token
  }
  if(config.method==='get'){
    config.paramsSerializer = function (params) {
      return qs.stringify(params, { arrayFormat: "repeat" });
    };
  }
  return config
},(error)=>{
  return Promise.reject(error)
})
//响应拦截
service.interceptors.response.use(response=>{
  console.log(response,'response')
    if(response.data.code==500){
      Notification.error({ title: '系统提示', message: response.data.message, duration: 4 })
    }
  return response.data
},(error)=>{
  console.log(error,'error');
  const data = error.response.data
  switch(error.response.status){
    case 403:
      Notification.error({ title: '系统提示', message: '拒绝访问', duration: 4 }) 
      break;
    case 500:
      Notification.error({ title: '系统提示', message: '服务端异常!', duration: 4 })
      break;
    case 404:
      Notification.error({ title: '系统提示', message: '很抱歉，资源未找到!', duration: 4 })
        break
    case 504:
      Notification.error({ title: '系统提示', message: '网络超时' })
        break
    case 401:
      Notification.error({ title: '系统提示', message: '未授权，请重新登录', duration: 4 })
      store.dispatch('user/LogOut').then(()=>{
        router.replace('/login')
      })
      break;
      default:
       Notification.error({
          title: '系统提示',
          message: data.message,
          duration: 4
        })
  } 
})
export default service
