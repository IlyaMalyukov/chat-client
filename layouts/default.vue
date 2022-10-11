<template lang="pug">
  .page
    LayoutHeader
    .app-container
      Nuxt
</template>

<style lang="scss" scoped>
@import '~styles/mixins.scss';

  .page {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

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