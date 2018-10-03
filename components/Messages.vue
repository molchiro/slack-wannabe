<template>
  <div class="messages-container">
    <div class="messages">
      <!--TODO:投稿がゼロ件でもloadingになってしまう-->
      <div v-if="messageRefs.length > 0">
        <message v-for="messageRef in messageRefs"
          :key="messageRef.key"
          :messageRef=messageRef>
        </message>
      </div>
      <div v-else>
        loading messages...
      </div>
    </div>
  </div>
</template>

<script>
  import firebase from '~/plugins/firebase.js'
  import message from '~/components/message.vue'

  export default {
    components: {
      message
    },
    data () {
      return {
        messageRefs: []
      }
    },
    mounted () {
      const messagesRef = firebase.database().ref('messages')
      messagesRef.on('child_added', snapshot => {
        this.messageRefs.push(messagesRef.child(snapshot.key));
      })
    }
  }
</script>

<style scoped lang="sass">
  .messages-container
    height: 50vh
    display: flex
  .messages
    overflow-y: scroll
</style>
