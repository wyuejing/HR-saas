import { setToken, getToken, removeToken } from '@/utils/auth'
import { login } from '@/api/user'
const state = {
  token: getToken()
}

const mutations = {
  setToken(state, payload) {
    state.token = payload
    setToken(payload)
  },
  removeToken(state) {
    state.token = null
    removeToken()
  }
}

const actions = {
  // 登录时调用该方法 将表单项传入作为登录请求的参数
  async login({ commit }, data) {
    const res = await login(data)
    commit('setToken', res)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
