<template>
  <div>
    <appHeader></appHeader>
    <section>
      <div>
        <div>
          <nuxt v-show="authUser"></nuxt>
          <signIn v-show="!authUser"></signIn>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import firebase from '~/plugins/firebase.js'
  import appHeader from '~/components/appHeader.vue'
  import signIn from '~/components/signIn.vue'
  import { mapGetters } from 'vuex'

  export default {
    components: {
      appHeader,
      signIn
    },
    computed: {
      ...mapGetters([
        'authUser',
      ])
    },
  }
</script>
