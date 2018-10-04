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

  const indexOfSnapshotInRefs = (snapshot, refs) => {
    const refKeys = refs.map(x => x.key);
    return refKeys.indexOf(snapshot.key);
  }

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
      messagesRef.on('child_removed', removedDataSnapshot => {
        const removedDataIndex = indexOfSnapshotInRefs(
                                    removedDataSnapshot, this.messageRefs)
        this.messageRefs.splice(removedDataIndex, 1)
      })
    },
  }
</script>

<style scoped lang="sass">
  .messages-container
    height: 50vh
    display: flex
  .messages
    overflow-y: scroll
</style>
