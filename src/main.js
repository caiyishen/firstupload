import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import moment from 'moment'
//引入icon组件
import '@/icons' // icon
//ant-design-vue按需引入
import '@/utils/ant'
//样式
import '@/assets/styles/base.css'
import '@/assets/styles/reset.css'
//请求封装
import service from '@/utils/request.js'
Vue.prototype.$axios = service
Vue.prototype.$moment = moment
Vue.config.productionTip = false
//EventBus
import vueBus from '@/utils/vueBus'
Vue.use(vueBus)
//filters
import filters from "./utils/filter";
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
import _ from 'lodash'
Vue.prototype._ = _
//路由守卫
import '@/permission'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')