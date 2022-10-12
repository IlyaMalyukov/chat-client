<template lang="pug">
  .header
    .logo Chat
    button.button(
      v-if='isAuth'
      @click='logout'
    ) Выйти
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch('user/logout')
      this.$router.push('/auth')
    }
  },
  computed: {
    isAuth() {
      return this.$store.getters['user/isAuth']
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';

.header {
  position: fixed;
  left: 0;
  right: 0;
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

.button {
  cursor: pointer;
}
</style>