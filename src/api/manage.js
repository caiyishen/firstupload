import axios from  'axios'
/**
 * 下载文件 用于excel导出
 * @param url
 * @param parameter
 * @returns {*}
 */
 export function downFile (url, parameter, method = 'get') {
  return axios({
    url: url,
    params: method === 'get' ? parameter : undefined,
    data: method === 'post' ? parameter : undefined,
    method: method,
    responseType: 'blob'
  })
}