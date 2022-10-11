<template lang="pug">
  .content Hello {{$store.getters['user/user']}}
</template>

<script>
export default {
  mounted() {
    // this.$store.dispatch('user/login', {name: 'Илья', password: '****})
  }
}
</script>

<style lang="scss" scoped>
.content {
  color: red;
}
</style>