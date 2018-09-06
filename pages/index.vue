<template>
  <div>
    <div v-if="$store.state.authUser">
      <!--username-->
      <p>
        signed in as [{{ $store.state.authUser.displayName }}]
        <button @click="signOut">sign out</button>
      </p>
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
    <div v-else>
      <button @click="signIn">sign in</button>
    </div>
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
          displayName: this.$store.authUser.displayName,
          content: this.writing
        });
        this.writing = ""
      },
      signIn () {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithRedirect(provider);
      },
      signOut () {
        firebase.auth().signOut()
        this.$store.cimmit('clearAuthUser')
      }
    },
    created () {
      firebase.auth().onAuthStateChanged( user => {
        this.$store.commit('setAuthUser', user)
      })
    },
    mounted () {
      db.ref('messages').on('child_added', snapshot => {
        this.messages.push(snapshot.val());
      })
    }

  }

</script>
