<template>
  <h1>{{ msg }}</h1>

  {{ appName }}

  <button type="button" @click="counter++">count is: {{ counter }}</button>
  <div>pos mouse: {{ pos.x }}, {{ pos.y }}</div>
</template>

<script lang="ts">
  import { ref, computed, defineComponent, reactive } from 'vue'
  import { storeToRefs } from 'pinia'
  import { useAppStore } from '@/stores'
  import { useMouse } from '@vueuse/core'

  export default defineComponent({
    name: 'HelloWorld',
    props: {
      msg: {
        type: String,
        required: false,
      },
    },
    setup: () => {
      const appStore = useAppStore()
      const { name, counter } = storeToRefs(appStore)

      const { x, y } = useMouse()
      const pos = reactive({ x, y })

      const appName = import.meta.env.VITE_APP_TITLE
      return {
        appName,
        counter,
        pos,
      }
    },
  })
</script>

<style scoped>
  a {
    color: #42b983;
  }

  label {
    margin: 0 0.5em;
    font-weight: bold;
  }

  code {
    background-color: #eee;
    padding: 2px 4px;
    border-radius: 4px;
    color: #304455;
  }
</style>
