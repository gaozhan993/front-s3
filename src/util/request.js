import axios from 'axios'

// 本工程中axios使用，均通过其API构建请求，可参考https://www.kancloud.cn/yunye/axios/234845
const service = axios.create({
  timeout: 5000 // request timeout,
})

// request interceptor
service.interceptors.request.use(
  async request => {
    request.headers['Access-Control-Allow-Origin'] = '*'
    // if (tmpToken) {
    //   request.headers['Authorization'] = 'Bearer ' + tmpToken.access_token
    // }
    return request
  }
)
// {
//   code: 1, //1：正确结果，2：回话过期，3：非法回话，4：权限不足，5：未知错误，200：正确，500：错误，401：权限问题
//   message: 后端错误信息
//   data: 后端正常处理结果封装
// }
// response interceptor
service.interceptors.response.use(
  async response => {
    const res = response.data
    if (res.code !== 1 && res.code !== 200) {
console.info('error')
    } else {
      return res.data
    }
  },
  async error => {
    if (error && error.response) {
      switch (error.response.status) {
        case 401:// 登陆失效
          break
      }
    }
    return Promise.reject(error)
  }
)

export default service
