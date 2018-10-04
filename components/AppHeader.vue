<template>
  <nav class="navbar is-info" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <span class="navbar-item title">
        slack-wannabe
      </span>
    </div>
    <div class="navbar-menu is-active">
      <div class="navbar-end">
        <span class="navbar-item" v-if="authUser">
          {{ authUser.displayName }}
          <button class="button" @click="signOut">sign out</button>
        </span>
      </div>
    </div>
  </nav>
</template>

<script>
  import firebase from '~/plugins/firebase.js'
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters([
        'authUser',
      ])
    },
    methods: {
      signOut () {
        firebase.auth().signOut()
        this.$store.commit('setAuthUser', null)
      }
    }
  }
</script>
