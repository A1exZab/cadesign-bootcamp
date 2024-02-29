import Icon from './components//Icon.vue'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.component('icon', Icon)

app.mount('#app')
