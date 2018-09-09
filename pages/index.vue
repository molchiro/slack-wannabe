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
    <post></post>
  </div>
</template>

<script>
  import firebase from '~/plugins/firebase.js'
  import post from '~/components/post.vue'

  const db = firebase.database();

  export default {
    data () {
      return {
        messages: []
      }
    },
    components: {
      post
    },
    mounted () {
      db.ref('messages').on('child_added', snapshot => {
        this.messages.push(snapshot.val());
      })
    }
  }
</script>
