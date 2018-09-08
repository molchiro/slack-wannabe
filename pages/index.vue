<template>
  <div>
    <!--messages-->
    <!--TODO:投稿がゼロ件でもloadingになってしまう-->
    <div v-if="messages.length > 0">
      <div v-for="message in messages">
        {{ message.displayName }}:{{ message.content }}
      </div>
    </div>
    <div v-else>
      loading messages...
    </div>
    <!--writing area-->
    <textarea v-model="writing" type="text"></textarea>
    <!--action-->
    <button @click="post">投稿</button>
  </div>
</template>

<script>
  import firebase from '~/plugins/firebase.js'

  const db = firebase.database();

  export default {
    data () {
      return {
        writing: "",
        messages: []
      }
    },
    methods: {
      post () {
        if ( !this.writing ) { return }
        db.ref('messages').push({
          displayName: this.$store.state.authUser.displayName,
          content: this.writing
        });
        this.writing = ""
      }
    },
    mounted () {
      db.ref('messages').on('child_added', snapshot => {
        this.messages.push(snapshot.val());
      })
    }
  }
</script>
