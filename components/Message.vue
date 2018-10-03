<template>
  <div class="my-message">
    <div class="my-message-header">
      <span class="display-name">
        {{ message.displayName }}
      </span>
      <span class="timestamp">
        {{ formatedTimestamp }}
      </span>
    </div>
    <div>
      <span class="my-message-body" v-text="message.content">
      </span>
    </div>
  </div>
</template>

<script>
  import firebase from '~/plugins/firebase.js'
  import { mapGetters } from 'vuex'
  import format from 'date-fns/format'

  export default {
    props: ['messageKey'],
    data () {
      return {
        message: {
          content: "",
          displayName: "",
          timestamp: "",
          uid: "",
        },
      }
    },
    computed: {
      ...mapGetters([
        'authUser',
      ]),
      formatedTimestamp: function () {
        return format(this.message.timestamp, 'YYYY-MM-DD HH:mm')
      },
      isAuthUser: function () {
        return this.authUser.uid === this.message.uid
      },
    },
    mounted () {
      firebase.database().ref('messages').child(this.messageKey).once('value').then(
        snapshot => {
          this.message = snapshot.val()
        }
      )
    },
  }
</script>

<style scoped lang="sass">
  .my-message
    padding: 5px
    padding-left: 10px
    border-radius: 3px
    background-color: #EEFAFF
    margin-bottom: 3px
  .my-message-body
    white-space: pre-wrap
    line-height: 1.3
  .display-name
    font-weight: bold
  .timestamp
    font-size: 0.75rem
</style>
