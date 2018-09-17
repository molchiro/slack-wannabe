<template>
  <div>
    <appHeader></appHeader>
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container">
          <nuxt v-show="$store.state.authUser"></nuxt>
          <signIn v-show="!$store.state.authUser"></signIn>
        </div>
      </div>
    </section>
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
