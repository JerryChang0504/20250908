import './assets/main.css'

import { createApp } from 'vue'
import AlertBox from './components/AlertBox.vue'
import formatPlugin from './components/plugins/formatPlugin'
import App from './App.vue'

const app = createApp(App)
app.component('AlertBox', AlertBox)
app.use(formatPlugin)
app.mount('#app')
