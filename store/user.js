import * as authApi from '../api/auth'

export default {
  state: {
    token: null,
    user: {},
  },
  mutations: {
    login(state, data) {
      state.token = data.token
      state.user = data.user
    },
    logout(state) {
      state.token = null
      state.user = {}
    }
  },
  actions: {
    async login({commit}, userData) {
      let res = await authApi.login(userData.name, userData.password)
      commit('login', {token: res.token, user: res.userData})
    },
    logout({commit}) {
      commit('logout')
    }
  },
  getters: {
    token: state => state.token,
    user: state => state.user,
    isAuth: state => !!state.token
  }
}