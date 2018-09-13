<template>
  <div>
    <textarea class="textarea" v-model="writing" type="text"></textarea>
    <button class="button" @click="post">投稿</button>
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
          uid: this.$store.state.authUser.uid,
          timestamp: new Date().getTime(),
          displayName: this.$store.state.authUser.displayName,
          content: this.writing
        });
        this.writing = ""
      }
    },
  }
</script>
