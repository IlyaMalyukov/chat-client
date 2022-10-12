<template lang="pug">
  .main-page
    Content
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  layout () {
    return 'default'
  },
  mounted() {
    if (!this.isAuth) {
      this.$router.push('/auth')
    }
  },
  computed: {
    isAuth() {
      return this.$store.getters['user/isAuth']
    }
  }
})
</script>
