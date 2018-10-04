import Vuex from 'vuex'

const store = () => new Vuex.Store({
  state: {
    authUser: null
  },
  mutations: {
    setAuthUser (state, user) {
      state.authUser = user
    }
  },
  getters: {
    authUser: (state) => {
      return state.authUser
    },
  },
})

export default store
