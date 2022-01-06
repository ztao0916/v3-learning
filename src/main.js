/*
 * @Author: ztao
 * @Date: 2021-12-27 18:10:55
 * @LastEditTime: 2021-12-27 18:25:31
 * @Description:
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'
import './style/index.scss'

createApp(App).use(store).use(router).mount('#app')
