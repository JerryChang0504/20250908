<script setup>
const props = defineProps({
  msg: String,
  msgText: {
    type: String,
    required: true,
  },
  age: [String, Number, Object],
  userName: String,
  defaultUserName: { type: String, default: 'Mary' },
  propF: {
    type: Object,
    default(rawProps) {
      return { message: 'hello' }
    },
  },
  propG: {
    validator(value, props) {
      return ['success', 'warning', 'danger'].includes(value)
    },
  },
})

const helloWorld = `${props.msgText} ${props.userName}`
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h1 class="green">{{ `${msgText} ${userName}` }}</h1>
    <h1 class="green">{{ helloWorld }}</h1>
    <h1 class="green">{{ age }}</h1>
    <h1 class="green">{{ defaultUserName }}</h1>
    <h1 class="green">{{ propF }}</h1>
    <h1 class="green">{{ propG }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vite.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
