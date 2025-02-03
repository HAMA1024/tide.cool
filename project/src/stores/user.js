import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    displayName: null
  }),
  actions: {
    setUser(user) {
      this.user = user
      this.displayName = user?.displayName || user?.email || '用户'
    },
    clearUser() {
      this.user = null
      this.displayName = null
    }
  },
  persist: true
})