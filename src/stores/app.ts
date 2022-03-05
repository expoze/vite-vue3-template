import { defineStore, acceptHMRUpdate } from 'pinia'

const useAppStore = defineStore('app', {
  state: () => {
    return {
      counter: 0,
      name: 'Eduardo',
      isAdmin: true,
    }
  },
})
export { useAppStore }

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot))
}
