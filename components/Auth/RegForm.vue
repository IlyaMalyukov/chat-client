<template lang="pug">
  .content
    h1 Регистрация
    .form
      .input
        input.input__input(
          v-model='name'
          placeholder='Имя'
        )
        .input__error {{nameError}}
      .input
        input.input__input(
          v-model='password'
          placeholder='Пароль'
          type='password'
        )
        .input__error {{passwordError}}

      .server-error {{serverError}}

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
    isLoading: false,
    hasErrors: false
  }),
  methods: {
    async registration() {
      this.checkErrors()

      if (this.hasErrors) {
        return
      }

      this.isLoading = true

      await authApi.registration(this.name, this.password)
        .then(() => this.login())
        .catch(err => {
          console.log(err)
          this.serverError = 'Пользователь с таким именем уже зарегистрирован'
          this.isLoading = false
          return
        })
    },
    async login() {
      await this.$store.dispatch('user/login', {
        name: this.name, 
        password: this.password
      })
      .catch(err => {
        console.log(err)
        this.isLoading = false
        return
      })

      this.isLoading = false
      this.clearForm()
      this.$router.replace({ path: '/' })
    },
    checkErrors() {
      if (this.name.length < 1) {
        this.nameError = 'Поле "Имя" не должно быть пустым'
        this.hasErrors = true
      }

      if (this.password.length < 1) {
        this.passwordError = 'Поле "Пароль" не должно быть пустым'
        this.hasErrors = true
      }

      if (this.nameError === '' && this.passwordError === '') {
        this.hasErrors = false
      }
    },
    clearForm() {
      this.name = ''
      this.password = ''
    }
  },
  watch: {
    name() {
      this.nameError = ''
    },
    password() {
      this.passwordError = ''
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

.server-error {
  color: rgb(226, 1, 1);
  padding-bottom: 20px;
}

.button {
  cursor: pointer;
}
</style>