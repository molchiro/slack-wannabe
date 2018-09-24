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

  const unixTime2ymd = ( intTime ) => {
    const d = new Date( intTime );
    const year = d.getFullYear();
    const month = d.getMonth();
    const day = d.getDate();
    const hour = ( '0' + d.getHours() ).slice(-2);
    const min = ( '0' + d.getMinutes() ).slice(-2);
    const sec = ( '0' + d.getSeconds() ).slice(-2);
    return year + '-' + month + '-' + day + ' ' + hour + ':' + min + ':' + sec;
  };

  export default {
    props: ['message'],
    computed: {
      ...mapGetters([
        'authUser',
      ]),
      formatedTimestamp: function () {
        return unixTime2ymd(this.message.timestamp)
      },
      isAuthUser: function () {
        return this.authUser.uid === this.message.uid
      },
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
