import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { initializeApp } from 'firebase/app'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import './style.css'
import App from './App.vue'
import router from './router'
import i18n from './i18n'



  
// Firebase配置
const firebaseConfig = {
  apiKey: "AIzaSyAtwWd1sqoNrPArJtBg86OB0DZE1DRPdCo",
  authDomain: "hhtt-3d4cd.firebaseapp.com",
  projectId: "hhtt-3d4cd",
  storageBucket: "hhtt-3d4cd.firebasestorage.app",
  messagingSenderId: "545919235515",
  appId: "1:545919235515:web:229958fbf250de1e56c09e"
}

// 初始化Firebase
initializeApp(firebaseConfig)

// 创建应用实例
const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.use(ElementPlus)
app.use(i18n)
app.mount('#app')