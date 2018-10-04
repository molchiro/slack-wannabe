<template>
  <div>
    <appHeader></appHeader>
    <div v-show="$store.state.authUser">
      <nuxt></nuxt>
    </div>
    <div v-show="!$store.state.authUser">
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
  }
</script>
