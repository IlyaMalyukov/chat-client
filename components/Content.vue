<template lang="pug">
  .content
    .messages(v-if='messages.length')
      Message(
        v-for='message in messages'
        :message='message'
      )
    .no-messages(v-else)
      .no-messages__text Сообщений нет
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

.no-messages {
  padding-top: 40px;
  text-align: center;
  font-size: 24px;
}
</style>