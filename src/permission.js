import router from "./router";
import {ACCESS_TOKEN} from '@/store/mutation-types'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css' 
import {whiteList} from '@/utils/whiteList'
import { handleRouters } from "./utils/util";
import store from './store'
router.beforeEach((to,from, next) => {
  Nprogress.start()
  const token = localStorage.getItem(ACCESS_TOKEN)
  // debugger
  //有token 无token 根据白名单
  if(token){
    //登录
    if(to.path=='/login'){
      next()
      Nprogress.done()
    }else{
      // debugger
      //其他看是否有动态路由 有
      if(store.getters.permissionList&&store.getters.permissionList.length>0){
          next()
      }else{
        //没有 获取动态路由
        store.dispatch('user/getPermissionData').then(()=>{
            if(store.getters.permissionList&&store.getters.permissionList==0) return 
            //处理动态路由
            const routes = handleRouters(store.getters.permissionList)          
            router.addRoutes(routes)    
            // 检测路由是否添加成功
            // next()
            next({ ...to, replace: true })   
        }).catch(()=>{
          console.log(err,'err');
        
        })
      } 
    }
  }else{
    if( whiteList.indexOf(to.path)>-1 || to.path=='/login'){
      next()
    }else{
      next({path:'/login'})
      Nprogress.done()
    }
  }
}) 
router.afterEach(() => {
  Nprogress.done()
})