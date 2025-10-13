<script setup>
import { ref } from 'vue'

const text = ref('')
const message = ref('')
</script>

<template>
  <p>text is: {{ text }}</p>
  <input :value="text" @input="(event) => (text = event.target.value)" placeholder="edit me" />
  <p>Message is: {{ message }}</p>
  <input v-model="message" placeholder="edit me" />

  <hr />

  <div>
    <span>Multiline message is:</span>
    <p style="white-space: pre-line">{{ message }}</p>
    <textarea v-model="message" placeholder="add multiple lines" rows="4" cols="50"></textarea>
  </div>
</template>

<style scoped></style>
