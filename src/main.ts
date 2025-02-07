import { createApp } from 'vue'
import App from './App.vue'
import router from './infrastructure/router'
import buildContainer from './infrastructure/di/BuilderContainer'

const app = createApp(App)

buildContainer()
app.use(router)
app.mount('#app')
