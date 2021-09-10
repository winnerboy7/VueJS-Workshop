import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem("token"),
    loggedIn: false,
  },

  getters: {
    axiosOption(state) {
      return state.token
        ? { headers: { authorization: "bearer " + state.token } }
        : {}
    },
    isLoggedIn(state) {
      return state.loggedIn
    },
  },

  mutations: {
    mutateToken(state, token) {
      state.token = token
    },
    mutateLoggedIn(state, value) {
      state.loggedIn = value
    },
  },
})
