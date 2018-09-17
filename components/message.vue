<template>
  <div class="my-message">
    <div class="my-message-header">
      <span class="displayName">
        {{ message.displayName }}
      </span>
      <span class="timestamp">
        {{ formatedTimestamp }}
      </span>
    </div>
      <span class="my-message-body">
        {{ message.content }}
      </span>
    </div>
  </div>
</template>

<script>
  import firebase from '~/plugins/firebase.js'

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
    data () {
      return {
        formatedTimestamp: unixTime2ymd(this.message.timestamp),
        isAuthUser: this.$store.state.authUser.uid===this.message.uid
      }
    },
  }
</script>
