<template>
  <div style="display: flex; flex-direction: column">
    <appHeader></appHeader>
    <section class="content-body">
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

<style scoped lang="sass">
  .content-body
    padding: 5px
    flex-grow: 1
    max-width: 600px
    margin: 0 auto
</style>
