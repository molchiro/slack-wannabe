<template>
  <div class="chat-container">
    <messages class="messages-list"></messages>
    <post class="post-area"></post>
  </div>
</template>

<script>
  import messages from '~/components/messages.vue'
  import post from '~/components/post.vue'

  export default {
    components: {
      messages,
      post
    },
  }
</script>

<style scoped lang="sass">
  .chat-container
    display: flex
    flex-direction: column
  .messages-list
  .post-area
</style>
