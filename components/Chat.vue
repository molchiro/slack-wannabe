<template>
  <div>
    <messages></messages>
    <post></post>
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
