<template>
  <div>
    <textarea v-model="input" type="text"></textarea>
    <p v-on:click="post">投稿</p>
    <div v-if="messages">
      <div v-for="value in messages">
        {{ value.text }}
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
        messages: null
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
      db.ref('messages').on('value', (snapshot) => {
        this.messages = snapshot.val();
      })
    }
  }

</script>
