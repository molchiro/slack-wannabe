import Vuex from 'vuex'

const store = () => new Vuex.Store({
  state: {
    authUser: null
  },
  mutations: {
    setAuthUser (state, user) {
      state.authUser = user
    }
  }
})

export default store
