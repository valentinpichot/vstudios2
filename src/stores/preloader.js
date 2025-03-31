import { defineStore } from 'pinia'

export const usePreloaderStore = defineStore({
  id: 'preloader',
  state: () => ({
    isLoading: true,
    hasLoadedOnce: false
  }),
  actions: {
    setLoading(value) {
      this.isLoading = value
    },
    setLoadedOnce(value) {
      this.hasLoadedOnce = value
    }
  }
})
