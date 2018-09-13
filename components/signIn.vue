<template>
  <div>
    <button class="button is-primary is-large"
      v-bind:class="{ 'is-loading': isWaitingAuth }"
      @click="signIn">
      sign in
    </button>
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
