import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const Layouts = ()=>import('@/components/layouts/PageView.vue')
const Login = ()=>import('@/views/Login')
const Demo = ()=>import('@/views/demo')
const page404 = ()=>import('@/views/404')
const routes = [
  {
    path: '/',
    name: 'Layouts',
    component:Layouts,  
    redirect: '/home/index',
    children:[{
      path:'/demo',
      name:'Demo',
      component:Demo
    }]
  },
  {
    path: '/login',
    name: 'Login',
    component:Login
  },
  {
    path: '/404',
    name: '404',
    component:page404
  },
  {
    path:'',
    redirect:'/home/index',
  }
]

global.router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// 解决导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router
