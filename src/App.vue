<template>
  <!-- <img alt="Vue logo" src="@/assets/logo.png" /> -->
  <IonApp>
    <ion-router-outlet />
  </IonApp>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { IonApp, IonRouterOutlet } from '@ionic/vue'

  export default defineComponent({
    name: 'App',
    components: {
      IonRouterOutlet,
      IonApp,
    },
  })
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
