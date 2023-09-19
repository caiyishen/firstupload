import {downFile} from '@/api/manage'
import Vue from 'vue'
/**
 * 下载文件
 * @param url 文件路径
 * @param fileName 文件名
 * @param parameter
 * @returns {*}
 */
 export function downloadFile (url, fileName, parameter, method) {
  return new Promise((resolve)=>{
    return downFile(url, parameter, method).then((data) => {
      if (!data || data.size === 0) {
        Vue.prototype['$message'].warning('文件下载失败')
        return
      }
      resolve()
      if (typeof window.navigator.msSaveBlob !== 'undefined') {
        window.navigator.msSaveBlob(new Blob([data]), fileName)
      } else {
        const url = window.URL.createObjectURL(new Blob([data]))
        const link = document.createElement('a')
        link.style.display = 'none'
        link.href = url
        link.setAttribute('download', fileName)
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link) // 下载完成移除元素
        window.URL.revokeObjectURL(url) // 释放掉blob对象
      }
    })
  }) 
}