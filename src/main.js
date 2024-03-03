import Icon from './components//Icon.vue'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

// Подключение компонента icon для глобального использования
app.component('icon', Icon)

app.mount('#app')
