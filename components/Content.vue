<template lang="pug">
  .content
    .messages
      Message(
        v-for='message in messages'
        :message='message'
      )
    InputMessage(
      @send-message='inputMessage'
    )
</template>

<script>
export default {
  data: () => ({
    messages: []
  }),
  methods: {
    inputMessage(message) {
      this.messages.push(message)
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  padding-top: 40px;
}
</style>