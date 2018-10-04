<template>
  <div>
    <div v-show="isWaitingAuth">
      connecting...
    </div>
    <button v-show="!isWaitingAuth" @click="signIn">sign in</button>
  </div>
</template>

<script>
  import firebase from '~/plugins/firebase.js'

  export default {
    data () {
      return {
        isWaitingAuth: true
      }
    },
    methods: {
      signIn () {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithRedirect(provider);
      }
    },
    created () {
      firebase.auth().onAuthStateChanged( user => {
        this.isWaitingAuth = false;
        this.$store.commit('setAuthUser', user);
      })
    }
  }
</script>
