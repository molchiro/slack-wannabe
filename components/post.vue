<template>
  <div>
    <textarea v-model="writing" type="text"></textarea>
    <button @click="post">投稿</button>
  </div>
</template>

<script>
  import firebase from '~/plugins/firebase.js'

  export default {
    data () {
      return {
        writing: "",
      }
    },
    methods: {
      post () {
        if ( !this.writing ) { return }
        firebase.database().ref('messages').push({
          displayName: this.$store.state.authUser.displayName,
          content: this.writing
        });
        this.writing = ""
      }
    },
  }
</script>
