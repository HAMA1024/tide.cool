<template>
  <div class="flex h-full">
    <!-- 左侧会话列表 -->
    <div class="w-64 border-r border-gray-200 flex flex-col">
      <!-- 搜索框 -->
      <div class="p-4">
        <div class="relative">
          <input type="text" placeholder="搜索 agent" class="w-full px-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
          <svg class="absolute right-3 top-2.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>



      <!-- 最近使用 -->
      <div class="px-4 py-2">
        <div class="font-medium text-gray-600">最近使用</div>
        <div class="mt-2 space-y-2">
          <div class="flex items-center p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
            <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">Y</div>
            <div class="ml-3">Yeah助手</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 右侧对话区域 -->
    <div class="flex-1 flex flex-col">
      <!-- 顶部标题栏 -->
      <div class="flex items-center justify-between p-4 border-b border-gray-200">
        <div class="flex items-center">
          <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">小</div>
          <div class="ml-3 font-medium">小红书爆款内容分析生成</div>
        </div>
        <div class="flex items-center space-x-4">
          <button class="p-2 hover:bg-gray-100 rounded-full">
            <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
          </button>
          <button class="p-2 hover:bg-gray-100 rounded-full">
            <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        </div>
      </div>

      <!-- 对话内容区域 -->
      <div ref="messageContainer" class="flex-1 overflow-y-auto p-4 space-y-4">
        <div v-for="(message, index) in messages" :key="index" class="flex items-start space-x-3" :class="{'justify-end': message.isUser}">
          <template v-if="!message.isUser">
            <div class="flex-shrink-0">
              <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">小</div>
            </div>
          </template>
          <div class="flex-1 max-w-[80%]">
            <div :class="[message.isUser ? 'bg-blue-500 text-white ml-auto' : 'bg-gray-100 text-gray-800', 'rounded-lg p-4']">
              {{ message.content }}
            </div>
          </div>
          <template v-if="message.isUser">
            <div class="flex-shrink-0">
              <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white">我</div>
            </div>
          </template>
        </div>
      </div>

      <!-- 底部输入框 -->
      <div class="border-t border-gray-200 p-4" style="margin-bottom: 20px;">
        <div class="flex items-center space-x-4">
          <div class="flex-1 relative">
            <textarea
              v-model="inputMessage"
              rows="1"
              placeholder="问我任何问题..."
              class="w-full px-4 py-2 pr-24 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none overflow-hidden text-black"
              style="min-height: 42px; max-height: 120px;"
              @input="autoResize"
              @keydown.enter.prevent="sendMessage"
            ></textarea>
            <div class="absolute right-2 top-1/2 -translate-y-1/2 flex items-center space-x-2">
              <button
                class="p-2 hover:bg-gray-100 rounded-full text-gray-600 transition-colors"
                title="上传文件"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                </svg>
              </button>
            </div>
          </div>
          <button 
            @click="sendMessage"
            :disabled="!inputMessage.trim()"
            :class="{'opacity-50 cursor-not-allowed': !inputMessage.trim()}"
            class="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            发送
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick, onMounted } from 'vue'

// 消息列表
const messages = ref([])

// 输入框内容
const inputMessage = ref('')

// 消息容器引用
const messageContainer = ref(null)

// 自动调整文本框高度
const autoResize = (e) => {
  const textarea = e.target
  textarea.style.height = 'auto'
  textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px'
}

// 发送消息
const sendMessage = async () => {
  const message = inputMessage.value.trim()
  if (!message) return

  // 添加用户消息
  messages.value.push({
    content: message,
    isUser: true
  })

  // 清空输入框
  inputMessage.value = ''

  // 模拟AI回复
  setTimeout(() => {
    messages.value.push({
      content: `收到你的消息：${message}`,
      isUser: false
    })
    scrollToBottom()
  }, 1000)

  // 滚动到底部
  await nextTick()
  scrollToBottom()
}

// 滚动到底部
const scrollToBottom = () => {
  if (messageContainer.value) {
    messageContainer.value.scrollTop = messageContainer.value.scrollHeight
  }
}

// 组件挂载时滚动到底部
onMounted(() => {
  scrollToBottom()
})
</script>