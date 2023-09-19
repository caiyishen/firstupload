export const handleRouters = (data)=>{
  //生成首页路由
  const Layouts = resolve=>require(['@/components/layouts/PageView.vue'],resolve)
  const routes = [
    {
      path:'/',
      name:'Layouts',
      component:Layouts,
      children:[...handleChildRouters(data)],
      meta:{
        title:'首页'
      },
      redirect: '/home/index',
    },
    {
      path:'*',
      redirect:'/404',
      component:()=>import('@/views/404.vue'),
    }
  ]
  return routes
}
export const handleChildRouters = (data)=>{
//生成特定格式
let routes = []
for(let item of data){ 
  console.log(item,'item')
  let component = ''
  if (item.component.indexOf('layouts') >= 0) {
    component = 'components/' + item.component
  } else {
    component = 'views/' + item.component
  }
  let componentPath
  componentPath =  resolve=>require(['@/' + component + '.vue'],resolve)
  let menu = {
    path:item.path,
    name:item.name,
    redirect: item.redirect,
    component: componentPath,
    hidden: item.hidden,
    meta:{
      icon:item.meta.icon,
      title:item.meta.title,
      url:item.meta.url,
      keepAlive:item.meta.keepAlive
    }
  }
  if(item.children&&item.children.length>0){ 
  menu.children = [...handleChildRouters(item.children)]
  }
  //子路由
  routes.push(menu)
}
return routes
}
/**
 * 过滤对象中为空的属性
 * @param obj
 * @returns {*}
 */
export const filterObj=(obj)=>{
  if(!typeof(obj)==='object') return
  for(const key in obj){
    if(obj.hasOwnProperty(key)&&(obj[key]===undefined||obj[key]===null||obj[key]=='')){
      delete obj[key]
    }
  }
  return obj
}