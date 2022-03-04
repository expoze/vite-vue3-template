<template>
  <h1>Tab</h1>
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  import HelloWorld from '@/components/HelloWorld.vue'

  export default defineComponent({
    name: 'Tab1Page',
    components: {
      HelloWorld,
    },
    setup() {
      return {}
    },
  })
</script>
