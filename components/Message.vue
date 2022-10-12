<template lang="pug">
  .message-wrapper
    .message(:class='{"message_is-me": userName === message.name}')
      .message__name(v-if='userName !== message.name') {{message.name}}
      .message__text {{message.text}}
</template>

<script>
export default {
  props: {
    message: Object
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

.message-wrapper {
  padding: 20px 0;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @include phones {
    padding: 10px 0;
    align-items: center;
  }
}

.message {
  background: #292929;
  padding: 10px;
  width: 400px;
  border-radius: 10px;

  @include phones {
    width: 90%;
  }

  &_is-me {
    background: #c3c3c3;
    align-self: flex-end;

    @include phones {
      align-self: center;
    }
  }

  &__name {
    color: grey;
    padding-bottom: 10px;
  }
}
</style>