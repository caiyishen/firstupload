import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import user from './modules/user'
import getters from './getters'
export default new Vuex.Store({
  namespaced:true,
  state: {
  
  },
  getters,
  mutations: {
  },
  actions: {
  },
  modules: {
    user
  }
})
