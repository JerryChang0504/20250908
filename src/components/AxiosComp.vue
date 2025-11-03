<script setup>
import axios from 'axios'

let apiService = axios.create({
  baseURL: 'http://localhost:8080',
})

const queryProduct = () => {
  // GET
  apiService
    .get('/api/queryAllProducts')
    .then((response) => console.log(response.data))
    .catch((error) => console.error(error))
}
</script>

<template>
  <div>
    <button @click="queryProduct()">查詢產品</button>
  </div>
</template>

<style scoped></style>
