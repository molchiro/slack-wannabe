<template>
  <div class="messages-container">
    <div class="messages">
      <!--TODO:投稿がゼロ件でもloadingになってしまう-->
      <div v-if="messages.length > 0">
        <div v-for="message in messages">
          <message :message=message></message>
        </div>
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
        messages: []
      }
    },
    mounted () {
      firebase.database().ref('messages').on('child_added', snapshot => {
        this.messages.push(snapshot.val());
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
