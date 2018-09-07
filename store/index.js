import Vuex from 'vuex'

const store = () => new Vuex.Store({
  state: {
    authUser: null
  },
  mutations: {
    setAuthUser (state, user) {
      state.authUser = user
    },
    clearAuthUser (state) {
      state.authUser = null
    }
  }
})

export default store
