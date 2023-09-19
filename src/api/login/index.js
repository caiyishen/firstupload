import service from '@/utils/request'
//获取登录验证码
export const getLoginCode = (time)=>{
    return service({
      method:'get',
      url:'/sys/randomImage/' + time,
      params:{}
    })
}
//登录
export const login = (data)=>{
  return service({
    method:'post',
    url:"/sys/login",
    data
  })
}
//登出
export const logout = (logoutToken)=>{
  return service({
    url: '/sys/logout',
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'X-Access-Token': logoutToken
    }
  })
}
//获取路由 按钮权限
export const getPermissionsByUser = (data)=>{
  return service({
    method:'get',
    url:"/sys/permission/getUserPermissionByToken",
    params:data
  })
}
