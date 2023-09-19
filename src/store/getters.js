import { USER_INFO } from '@/store/mutation-types'
const getters = {
  permissionList:state=>state.user.permissionList,
  userInfo: state => { state.user.info = localStorage.setItem(USER_INFO); return state.user.info },
}
export default getters