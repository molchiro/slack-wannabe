import Vuex from 'vuex'
import firebase from '~/plugins/firebase.js'

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
