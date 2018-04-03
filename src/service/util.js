'use strict'

import axios from 'axios'

//----------------------------------------------------------------------axios的请求相关

/**
 * get 请求
 * @param {String} getUrl   get请求的地址，必选
 * @param {JSON}   getParams    get请求携带的参数，默认值为{}，可选
*/
export const getAjax = (getUrl, getParams = {}) => {
  return axios.get(getUrl, {params: getParams})
}

/**
 * post 请求
 * @param {String} postUrl   post请求的地址，必选
 * @param {JSON}   postParams    post请求携带的参数，默认值为{}，可选
*/
export const postAjax = (postUrl, postParams = {}) => {
  return axios.post(postUrl, {params: postParams})
}

// ----------------------------------------------------------------------axios的拦截器相关

/**
 * 请求拦截，修改当前请求的请求头
 * @param {Function}  callback  回调函数，必须接受传参，并且有返回值，必选。
 *                    对于当前请求头进行数据的添加和删除，并进行返回
*/
export const interReqAjax = (callback) => {
  axios.interceptors.request.use(config => {
    config = callback(config)
    return config
  })
}

/**
 * 响应拦截，处理reponse的结果
 * @param {Function}  callback  回调函数，必须接受传参，并且有返回值，必选。
 *                    对于当前响应数据进行数据进行判断，修改响应数据的特定值，并进行返回
*/
export const interResAjax = (callback) => {
  axios.interceptors.response.use(res => {
    let data = res.data
    // 判断响应数据是否存在
    if (res.request.responseType === 'arraybuffer' && !data.length) {
      data = callback(data)
    }
    return data
  })
}

export default {}

