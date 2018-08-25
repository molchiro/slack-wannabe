<template>
  <div>
    <textarea v-model="input" type="text"></textarea>
    <p v-on:click="post">投稿</p>
    <div v-if="messages.length > 0">
      <div v-for="message in messages">
        {{ message.text }}
      </div>
    </div>
    <div v-else>
      loading...
    </div>

  </div>
</template>

<script>
  import firebase from '~/plugins/firebase.js'

  const db = firebase.database();

  export default{
    data () {
      return {
        input: "",
        messages: []
      }
    },
    methods: {
      post: function () {
        db.ref('messages').push().set({
          text: this.input
        });
        this.input = ""
      }
    },
    mounted () {
      db.ref('messages').on('child_added', (snapshot) => {
        this.messages.push(snapshot.val());
      })
    }
  }

</script>
