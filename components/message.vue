<template>
  <div>
    {{ message.displayName }}:{{ message.content }}
  </div>
</template>

<script>
  import firebase from '~/plugins/firebase.js'

  export default {
    props: ['message'],
    data () {
      return {
        isAuthUser: this.$store.state.authUser.uid===this.message.uid
      }
    },
  }
</script>
