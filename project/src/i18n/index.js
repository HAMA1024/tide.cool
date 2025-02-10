import { createI18n } from 'vue-i18n'
import en from '../locales/en'
import zh from '../locales/zh'


// 获取浏览器语言设置
const getBrowserLanguage = () => {
  const language = navigator.language || navigator.userLanguage
  return language.toLowerCase().startsWith('zh') ? 'zh' : 'en'
}

const i18n = createI18n({
  legacy: false, // 使用 Composition API 模式
  locale: 'en', // 设置默认语言为英文
  fallbackLocale: 'en', // 备用语言
  messages: {
    en,
    zh
  },
  // 日期时间格式化选项
  datetimeFormats: {
    en: {
      short: {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }
    },
    zh: {
      short: {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }
    }
  },
  // 数字格式化选项
  numberFormats: {
    en: {
      currency: {
        style: 'currency',
        currency: 'USD'
      }
    },
    zh: {
      currency: {
        style: 'currency',
        currency: 'CNY'
      }
    }
  }
})

//const { locale } = useI18n()

// 切换语言
const changeLanguage = (lang) => {
  locale.value = "en"
}

export default i18n 