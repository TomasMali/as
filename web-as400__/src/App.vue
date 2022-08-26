<template>
  <router-view />
</template>
<script>
import { defineComponent } from 'vue';
import { createPinia } from 'pinia'

export default defineComponent({
  name: 'App',
  createPinia
})
</script>
