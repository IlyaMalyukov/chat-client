<template lang="pug">
  .content
    h1 Авторизация
    .form
      .input
        input.input__input(
          v-model='name'
          placeholder='Имя'
        )
        .input__error
      .input
        input.input__input(
          v-model='password'
          placeholder='Пароль'
          type='password'
        )
        .input__error
      button.button(@click='registration')
       span(v-if='!isLoading') Готово
       span(v-else) Загрузка...
</template>

<script>
import * as authApi from '../../api/auth'

export default {
  data: () => ({
    name: '',
    password: '',
    nameError: '',
    passwordError: '',
    serverError: '',
    isLoading: false
  }),
  methods: {
    async registration() {
      this.isLoading = true

      await this.$store.dispatch('user/login', {
        name: this.name, 
        password: this.password
      })
      .catch(err => {
        // this.serverError = err
        this.isLoading = false
        return
      })
      
      this.isLoading = false
      this.clearForm()
      this.$router.replace({ path: '/' })
    },
    clearForm() {
      this.name = ''
      this.password = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  text-align: center;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.input {
  padding-bottom: 10px;

  &__input {
    padding: 2px;
    border: none;
    border-bottom: 1px solid #000;
    outline: none;
  }

  &__error {
    padding-top: 5px;
    color: rgb(226, 1, 1);
    font-size: 10px;
    height: 17px;
    text-align: left;
  }
}

.button {
  cursor: pointer;
}
</style>