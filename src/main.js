
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import 'alertifyjs/build/css/alertify.css'
import 'alertifyjs/build/css/themes/default.css'






const app = createApp(App)

const pinia = createPinia()

app.use(pinia)
app.use(router)




import { useThemeStore } from '@/stores/theme'
const theme = useThemeStore(pinia)
theme.initTheme()

app.mount('#app')
