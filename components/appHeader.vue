<template>
  <div>
    <h1>slack-wannabe</h1>
    <div v-if="$store.state.authUser">
      signed in as [{{ $store.state.authUser.displayName }}]
      <button @click="signOut">sign out</button>
    </div>
  </div>
</template>

<script>
  import firebase from '~/plugins/firebase.js'

  export default {
    methods: {
      signOut () {
        firebase.auth().signOut()
        this.$store.cimmit('clearAuthUser')
      }
    }
  }
</script>
