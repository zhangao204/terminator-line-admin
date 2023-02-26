<template>
  <div class="login">
    <div class="q-pa-md fixed-center shadow-1 form">
      <q-form
          @submit="onSubmit"
          @reset="onReset"
          class="q-gutter-md">

        <q-input
            filled
            v-model="email"
            label="邮箱"
            hint="登录邮箱"
            lazy-rules
            :rules="[ val => val && val.length > 0 || '']"/>

        <q-input
            filled
            v-model="password"
            label="密码"
            hint="登陆密码"
            lazy-rules
            :rules="[ val => val && val.length > 0 || '']"/>

        <q-toggle v-model="accept" label="记住登录"/>

        <div>
          <q-btn label="登录" type="submit" color="primary"/>
          <q-btn label="重置" type="reset" color="primary" flat class="q-ml-sm"/>
        </div>
      </q-form>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import {useRouter} from 'vue-router'
import Notify from '@/utils/notify.js'
import {login} from '@/api/login.js'
import {setToken} from '@/utils/auth.js'

const email = ref(null)
const password = ref(null)
const accept = ref(false)

const router = useRouter()

const onSubmit = () => {
  const info = {
    email: email.value,
    password: password.value
  }

  login(info).then(
      (response) => {
        setToken(response.data.token)
        router.push({
          name: 'HOME'
        })
        Notify.notifySuccess('登录成功')
      },
      (error) => {
        Notify.notifyFailure(error.data.error_msg)
      }
  )
}

const onReset = () => {
  email.value = null
  password.value = null
  accept.value = false
}


</script>

<style scoped lang="sass">
.login
  width: 100vw
  height: 100vh
  background-position: center
  background-size: cover
  background-image: linear-gradient(45deg, #FFAACF, #B4E4FF)

.form
  width: 360px
  border-radius: 6px
  background-color: white
</style>