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
import {setToken, setLoginInfo} from '@/utils/auth.js'

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
        setLoginInfo(response.data)
        router.push({
          name: 'HOME'
        })
        Notify.notifySuccess('登录成功')
      },
      (error) => {
        console.log(error)
        if (error.response) {
          Notify.notifyFailure(error.response.data.error_msg)
        } else {
          Notify.notifyFailure('请求已发出，但未收到服务器的任何响应，请检查你的网络情况以及后端服务器的在线状态')
        }
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