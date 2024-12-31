import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
// import router from './router'

const app = createApp(App)

app.use(createPinia())
// app.use(router)

// 引入element-ui
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import 'element-plus/dist/index.css'
app.use(ElementPlus, { locale: zhCn });

// import './interceptor'

app.mount('#app')
