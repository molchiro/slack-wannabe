<template>
  <div>
    <textarea v-model="input" type="text"></textarea>
    <p v-on:click="post">投稿</p>
    <p>{{ posts }}</p>
  </div>
</template>

<script>
  import firebase from '~/plugins/firebase.js'

  const db = firebase.database();

  export default{
    data () {
      return {
        input: "",
        posts: {}
      }
    },
    methods: {
      post: function () {
        db.ref('posts').push().set({
          text: this.input
        });
      }
    },
    mounted () {
      db.ref('posts').on('value', (snapshot) => {
        this.posts = snapshot.val();
      })
    }
  }

</script>
