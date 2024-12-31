<script setup>
import { RouterView } from 'vue-router'

import  userApi  from 'torx-vue'
await userApi.page()
</script>

<template>
 
  <RouterView />
</template>

<style scoped>
</style>