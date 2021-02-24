import request from '../util/request.js'

// 获取数据
export function getInfo() {
  return request({
    url: 'https://api.coindesk.com/v1/bpi/currentprice.json',
    method: 'get'
  })
}

// 访问错误链接
export function getErrorInfo() {
  return request({
    url: 'https://api.coindesk.com/v1/bpi/currentprice.json',
    method: 'post'
  })
}


