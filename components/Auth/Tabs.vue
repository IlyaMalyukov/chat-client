<template lang="pug">
.wrapper
  .tabs
    .tabs__item(
      :class='{"tabs__item_active": activeTab === "registration"}'
      @click='activeTab = "registration"') Регистрация
    .tabs__item(
      :class='{"tabs__item_active": activeTab === "login"}'
      @click='activeTab = "login"') Авторизация
  .content
    AuthRegForm(v-if='activeTab === "registration"')
    AuthLoginForm(v-else)
</template>

<script>
export default {
  data: () => ({
    tabs: [
      'registration',
      'login'
    ],
    activeTab: 'registration'
  })
}
</script>

<style lang="scss" scoped>
.tabs {
  display: flex;
  align-items: center;
  justify-content: center;

  &__item {
    cursor: pointer;
    padding: 5px 10px;

    &_active {
      border-bottom: 1px solid #000;
    }
  }
}
</style>