<template>
  <div>
    <appHeader></appHeader>
    <div v-if="$store.state.authUser">
      <nuxt></nuxt>
    </div>
    <div v-else>
      <signIn></signIn>
    </div>
  </div>
</template>

<script>
  import firebase from '~/plugins/firebase.js'
  import appHeader from '~/components/appHeader.vue'
  import signIn from '~/components/signIn.vue'

  export default {
    components: {
      appHeader,
      signIn
    },
    created () {
      firebase.auth().onAuthStateChanged( user => {
        this.$store.commit('setAuthUser', user)
      })
    }
  }
</script>
