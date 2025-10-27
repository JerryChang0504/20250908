<template>
  <div>
    <h2>使用者詳情</h2>
    <p>$route取得 - 目前使用者：{{ $route.params.name }}</p>
    <p>script取得 - 目前使用者：{{ name }}</p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const name = route.params.name
</script>
