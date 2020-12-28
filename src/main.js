import { createApp } from 'vue'
import App from './App.vue'
import bus from './bus'

const app = createApp(App)

app.config.globalProperties.$bus = bus

app.mount('#app')