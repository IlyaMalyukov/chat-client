<template lang="pug">
  .header
    .logo Chat
</template>

<style lang="scss" scoped>
@import '~styles/mixins.scss';

.header {
  width: 100%;
  max-width: 100vw;
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
</style>