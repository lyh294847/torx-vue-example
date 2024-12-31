import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
const app = createApp(App)
app.use(createPinia())

import 'torx-vue/dist/index.css'
import { routerUtil } from 'torx-vue'
import { routes } from './route/route'
const router = routerUtil.buildRouter(routes)
app.use(router)

// 引入element-ui
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import 'element-plus/dist/index.css'
app.use(ElementPlus, { locale: zhCn });

// import './interceptor'



app.mount('#app')
