import router from '@/router'
import {login,getPermissionsByUser,logout } from '@/api/login/index.js'
import {ACCESS_TOKEN,USER_NAME,USER_INFO,USER_AUTH,UI_CACHE_DB_DICT_DATA,SYS_BUTTON_AUTH} from '@/store/mutation-types'
export default {
  namespaced: true,
  state: {
    token:'',
    username: '',
    realname: '',
    info:{},
    avatar:'',
    dictionary:{},
    permissionList:[]
  },
  getters:{

  },
  mutations: {
    SET_TOKEN(state,payload){
      state.token = payload
    },
    SET_INFO(state,payload){
      state.info = payload
    },
    SET_NAME(state,payload){
      state.username = payload.username
      state.realname = payload.realname
    },
    SET_AVATAR(state,payload){
      state.avatar = payload
    },
    SET_DICTIONARY(state,payload){
      state.dictionary = payload
    },
    SET_PERMISSION(state,payload){
      state.permissionList = payload
    }
  },
  actions: {
    Login({commit},payload){
      return new Promise((resovle,rejecet)=>{
        login(payload).then(res=>{
          // console.log(res,'res')
          if(res.code==200){
            let {token,userInfo,sysAllDictItems} = res.result || {}
            localStorage.setItem(ACCESS_TOKEN,token)
            localStorage.setItem(USER_NAME,userInfo.username)
            localStorage.setItem(USER_INFO, JSON.stringify(userInfo))
            localStorage.setItem(UI_CACHE_DB_DICT_DATA, JSON.stringify(sysAllDictItems  ) )
            commit('SET_TOKEN', token)
            commit('SET_INFO', userInfo)
            commit('SET_NAME', { username: userInfo.username, realname: userInfo.realname })
            commit('SET_AVATAR', userInfo.avatar)
            commit('SET_DICTIONARY',sysAllDictItems)
            router.replace({path:'/'})
            resovle(res)
          }else{
            rejecet(res)
          }
        })
      })
    },
    // 退出登录
    LogOut({commit}){
      return new Promise((resolve)=>{
        logout().then(()=>{
          commit('SET_TOKEN', '')
          commit('SET_INFO', {})
          commit('SET_NAME', { username: '', realname:''})
          commit('SET_AVATAR', '')
          commit('SET_DICTIONARY',[])
          localStorage.removeItem(ACCESS_TOKEN)
          localStorage.removeItem(USER_NAME)
          localStorage.removeItem(USER_INFO)
          localStorage.removeItem(UI_CACHE_DB_DICT_DATA)
          resolve()
        })
       
      })
    },
    //获取路由按钮权限
    getPermissionData({commit}){
      return new Promise((resolve,reject)=>{
        const token = localStorage.getItem(ACCESS_TOKEN)
        let params = {
          token
        }
        getPermissionsByUser(params).then(res=>{     
          console.log(res,'res路由按钮')
          let {auth,allAuth,menu} = res.result ||{}
          localStorage.setItem(USER_AUTH, JSON.stringify(auth))
          localStorage.setItem(SYS_BUTTON_AUTH,JSON.stringify(allAuth))
          commit('SET_PERMISSION',menu)
          // console.log(menu,'menu');
          if(menu&&menu.length>0){
            resolve()  
          }else{
            reject()
          }
           
      })
      }) 
    }
  },
  modules: {
  }
}
