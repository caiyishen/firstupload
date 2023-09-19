import service from '@/utils/request'
export const getJobFairList = (data)=>{
    return service({
      method:'get',
      url:'/rencai/back/jobFair/jobfairModule/jobFairList',
      params:data
    })
}
