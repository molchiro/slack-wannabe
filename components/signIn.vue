<template>
  <div>
    <button @click="signIn">sign in</button>
  </div>
</template>

<script>
  import firebase from '~/plugins/firebase.js'

  export default {
    methods: {
      signIn () {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithRedirect(provider);
      }
    }
  }
</script>
