<template lang="pug">
  .content
    .messages(v-if='messages.length')
      Message(
        v-for='(message, index) in messages'
        :message='message'
        :key='index'
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
  mounted() {
    this.socket = this.$nuxtSocket({
      name: 'work',
      channel: '/',
      reconnection: false
    })

    this.socket
    .on('chat message', (msg) => {
      this.messages.push(msg)
    })
  },
  methods: {
    inputMessage(message) {
      this.socket.emit('chat message', message)
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