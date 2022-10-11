<template lang="pug">
  .page
    LayoutHeader
    .app-container
      Nuxt
</template>

<script>
export default {
  layout () {
    return 'default'
  },
}
</script>

<style lang="scss" scoped>
@import '~styles/mixins.scss';
  .app-container {
    padding: 30px 100px 100px;

    @include phones {
      padding: 30px 50px 100px;
    }

    @include phones-small {
      padding: 30px 15px 100px;
    }
  }
</style>