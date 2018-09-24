<template>
  <div>
    <textarea class="textarea" v-model="writing" type="text"></textarea>
    <button class="button" @click="post">投稿</button>
  </div>
</template>

<script>
  import firebase from '~/plugins/firebase.js'
  import { mapGetters } from 'vuex'

  export default {
    data () {
      return {
        writing: "",
      }
    },
    computed: {
      ...mapGetters([
        'authUser',
      ])
    },
    methods: {
      post () {
        if ( !this.writing ) { return }
        firebase.database().ref('messages').push({
          uid: this.authUser.uid,
          timestamp: new Date().getTime(),
          displayName: this.authUser.displayName,
          content: this.writing
        });
        this.writing = ""
      }
    },

  }
</script>
