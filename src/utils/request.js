import axios from 'axios'
// 创建一个axios实例
const service = axios.create()
// 请求拦截器
service.interceptors.request.use()
// 响应拦截器
service.interceptors.response.use()
export default service
