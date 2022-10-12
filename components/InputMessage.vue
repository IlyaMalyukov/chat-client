<template lang="pug">
  .input-message
    .user-name {{userName}}
    input.input(
      v-model='message'
      @keydown.enter='sendMessage')
    button.button(@click='sendMessage') Отправить
</template>

<script>
export default {
  data: () => ({
    message: ''
  }),
  methods: {
    sendMessage() {
      if (!!this.message) {
        this.$emit('send-message', {
          name: this.userName,
          text: this.message
        })
        this.message = ''
      }
    }
  },
  computed: {
    userName() {
      return this.$store.getters['user/user'].name
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';

.input-message {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 15px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #222;
  color: #fff;

  @include phones {
    padding: 15px 50px;
  }

  @include phones-small {
    padding: 15px 15px;
  }
}

.input {
  height: 30px;
  width: 100%;
  margin: 0 20px;
  padding: 5px 10px;
  border-radius: 80px;
  border: none;
  outline: none;
}
</style>