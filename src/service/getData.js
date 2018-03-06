'use strict'

import axios from 'axios'

function requestData (url) {
  let res = 'bad request'
  if (!!url){
    axios
      .get(url)
      .then((response) => {
      console.log('请求到的'+url+'数据是')
      console.log(response.data)
      res = response.data || []
    })
    .catch((error) => {
      console.error(error)
    })
  }
  return res
}

/**
 * 获取左侧面板数据
*/
const leftAsideData = requestData('../../static/mock/leftAsideData.json')

/**
 * 获取项目已完成功能数据
*/
const completeList = requestData('../../static/mock/completeList.json')

export {completeList}

export default {}

