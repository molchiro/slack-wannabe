<template>
  <div class="messages-container">
    <div class="messages">
      <!--TODO:投稿がゼロ件でもloadingになってしまう-->
      <div v-if="messageKeys.length > 0">
        <message v-for="messageKey in messageKeys"
          :key="messageKey"
          :messageKey=messageKey>
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
        messageKeys: []
      }
    },
    mounted () {
      firebase.database().ref('messages').on('child_added', snapshot => {
        this.messageKeys.push(snapshot.key);
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
