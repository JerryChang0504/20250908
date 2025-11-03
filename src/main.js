import './assets/main.css'

import { createApp } from 'vue'
import AlertBox from './components/AlertBox.vue'
import formatPlugin from './components/plugins/formatPlugin'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.component('AlertBox', AlertBox)
app.use(ElementPlus)
app.use(formatPlugin)
app.use(router)
app.mount('#app')
