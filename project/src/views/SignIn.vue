<template>
  <div class="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">登录账户</h2>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <!-- 社交登录按钮 -->
        <div class="space-y-4">
          <button @click="signInWithGoogle" class="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            <img class="h-5 w-5 mr-2" src="https://www.google.com/favicon.ico" alt="Google logo" />
            使用 Google 账号登录
          </button>
          <button @click="signInWithGithub" class="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
            <svg class="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V19c0 .27.16.59.67.5C17.14 18.16 20 14.42 20 10A10 10 0 0010 0z" clip-rule="evenodd" />
            </svg>
            使用 GitHub 账号登录
          </button>
        </div>

        <div class="mt-6">
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-300"></div>
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-2 bg-white text-gray-500">或者</span>
            </div>
          </div>
        </div>

        <!-- 邮箱登录表单 -->
        <form class="mt-6 space-y-6" @submit.prevent="signInWithEmail">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">邮箱地址</label>
            <div class="mt-1">
              <input v-model="email" id="email" name="email" type="email" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
            </div>
            <div v-if="v$.email.$error" class="text-red-500 text-xs mt-1">
              {{ v$.email.$errors[0].$message }}
            </div>
          </div>

          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">密码</label>
            <div class="mt-1">
              <input v-model="password" id="password" name="password" type="password" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
            </div>
            <div v-if="v$.password.$error" class="text-red-500 text-xs mt-1">
              {{ v$.password.$errors[0].$message }}
            </div>
          </div>

          <div>
            <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              登录
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useVuelidate } from '@vuelidate/core'
import { required, email as emailValidator, minLength } from '@vuelidate/validators'
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from 'firebase/auth'
import { useUserStore } from '../stores/user'

const router = useRouter()
const userStore = useUserStore()
const auth = getAuth()

const email = ref('')
const password = ref('')

const rules = {
  email: { required, email: emailValidator },
  password: { required, minLength: minLength(6) }
}

const v$ = useVuelidate(rules, { email, password })

const signInWithEmail = async () => {
  const isFormValid = await v$.value.$validate()
  if (!isFormValid) return

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value)
    userStore.setUser(userCredential.user)
    router.push('/')
  } catch (error) {
    console.error('Email sign in error:', error)
    // 这里可以添加错误提示
  }
}

const signInWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider()
    const result = await signInWithPopup(auth, provider)
    userStore.setUser(result.user)
    router.push('/')
  } catch (error) {
    console.error('Google sign in error:', error)
    // 这里可以添加错误提示
  }
}

const signInWithGithub = async () => {
  try {
    const provider = new GithubAuthProvider()
    const result = await signInWithPopup(auth, provider)
    userStore.setUser(result.user)
    router.push('/')
  } catch (error) {
    console.error('Github sign in error:', error)
    // 这里可以添加错误提示
  }
}
</script>