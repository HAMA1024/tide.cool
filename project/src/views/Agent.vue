<template>
  <div class="agent-container">
    <!-- 顶部导航栏 -->
    <div class="nav-tabs">
      <div class="left-tabs">
        <el-radio-group v-model="activeTab">
          <el-radio-button label="all">全部</el-radio-button>
          <el-radio-button label="recent">最近编辑</el-radio-button>
          <el-radio-button label="mine">我创建的</el-radio-button>
        </el-radio-group>
      </div>
      
      <div class="right-controls">
        <el-select v-model="selectedGroup" placeholder="全部分组">
          <el-option label="全部分组" value="all" />
          <el-option label="默认分组" value="default" />
        </el-select>
        
        <el-select v-model="selectedSort" placeholder="全部标签">
          <el-option label="全部标签" value="all" />
        </el-select>
        
        <el-button type="primary" @click="dialogVisible = true">
          <el-icon><Plus /></el-icon>
          新建 Agent
        </el-button>
      </div>
    </div>

    <!-- Agent列表 -->
    <div class="agent-list">
      <!-- Agent卡片 -->
      <AgentCard v-for="agent in agents" :key="agent.id" :agent="agent" @openSetting="handleOpenSetting" />
    </div>

    <!-- Agent设置对话框 -->
    <AgentSetting v-model="settingDialogVisible" :agent="currentAgent" />
    </div>

    <!-- 新建Agent对话框 -->
    <el-dialog
      v-model="dialogVisible"
      title="新建Agent"
      width="80%"
      class="create-agent-dialog"
      :close-on-click-modal="false"
    >
      <div class="dialog-content">
        <!-- 左侧菜单 -->
        <div class="left-menu">
          <el-menu
            :default-active="activeMenu"
            @select="handleMenuSelect"
          >
 

            <el-menu-item index="quick-start">
              <el-icon><Lightning /></el-icon>
              <span>快速上手</span>
            </el-menu-item>
            <el-menu-item index="customer-service">
              <el-icon><Service /></el-icon>
              <span>智能客服</span>
            </el-menu-item>
            <el-menu-item index="sales">
              <el-icon><Sell /></el-icon>
              <span>销售</span>
            </el-menu-item>
            <el-menu-item index="marketing">
              <el-icon><Promotion /></el-icon>
              <span>营销</span>
            </el-menu-item>
            <el-menu-item index="hr">
              <el-icon><User /></el-icon>
              <span>HR</span>
            </el-menu-item>
          </el-menu>
        </div>

        <!-- 右侧模板列表 -->
        <div class="right-content">
          <div class="template-grid">
            <div v-for="template in templates" :key="template.id" class="template-card">
              <el-avatar :size="60" :src="template.avatar" />
              <h3>{{ template.name }}</h3>
              <p class="description">{{ template.description }}</p>
              <div class="template-stats">
                <span><el-icon><View /></el-icon> {{ template.views }}</span>
                <span><el-icon><Star /></el-icon> {{ template.stars }}</span>
                <span><el-icon><ChatDotRound /></el-icon> {{ template.messages }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </el-dialog>

</template>

<script setup>
import { ref } from 'vue'
import { Plus, Lightning, Service, Sell, Promotion, User } from '@element-plus/icons-vue'
import AgentCard from '../components/AgentCard.vue'
import AgentSetting from './AgentSetting.vue'

const activeTab = ref('all')
const selectedGroup = ref('all')
const selectedSort = ref('all')
const dialogVisible = ref(false)
const activeMenu = ref('quick')

// 模拟数据
const agents = ref([
  {
    id: 1,
    name: '电商客服小Y',
    code: '13819103186',
    avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
    templateCount: 3,
    favoriteCount: 11,
    viewCount: 3,
    messageCount: 0
  },
  {
    id: 2,
    name: '运营组长',
    code: 'OPERATION-LEADER-001',
    avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
    templateCount: 15,
    favoriteCount: 320,
    viewCount: 1280,
    messageCount: 640
  },
  {
    id: 3,
    name: '内容策划',
    code: 'CONTENT-PLANNER-001',
    avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
    templateCount: 18,
    favoriteCount: 280,
    viewCount: 960,
    messageCount: 480
  },
  {
    id: 4,
    name: 'KOL',
    code: 'KOL-001',
    avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
    templateCount: 20,
    favoriteCount: 420,
    viewCount: 1680,
    messageCount: 840
  }
])

const templates = ref([
  {
    id: 1,
    name: 'Yeah助手',
    description: '我是您的AI助手，擅长网络知识搜索和语言翻译，还能助您完成各种任务。',
    avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
    views: 0,
    stars: 12,
    messages: 1
  },
  {
    id: 2,
    name: '文档QA助手',
    description: '擅长知识问答，给我一份文档，我可以马上变成专业客服。',
    avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
    views: 28,
    stars: 0,
    messages: 0
  },
  {
    id: 3,
    name: '数据分析助手',
    description: '擅长数据分析，上传你的Excel表格，我可以帮你分析数据。',
    avatar: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
    views: 0,
    stars: 0,
    messages: 1
  }
])

const handleMenuSelect = (index) => {
  activeMenu.value = index
  // 根据选中的菜单项更新模板列表
}

const settingDialogVisible = ref(false)
const currentAgent = ref(null)

const handleOpenSetting = (agent) => {
  currentAgent.value = agent
  settingDialogVisible.value = true
}
</script>

<style scoped>
.agent-container {
  padding: 20px;
}

.nav-tabs {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.right-controls {
  display: flex;
  gap: 12px;
  align-items: center;
}

.agent-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
}


/* 新建Agent对话框样式 */
.create-agent-dialog :deep(.el-dialog__body) {
  padding: 0;
}

.dialog-content {
  display: flex;
  height: 600px;
}

.left-menu {
  width: 200px;
  border-right: 1px solid #eee;
}

.right-content {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
}

.template-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.template-card {
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 8px;
  text-align: center;
  transition: all 0.3s;
}

.template-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.template-card h3 {
  margin: 12px 0 8px;
  font-size: 16px;
}

.template-card .description {
  color: #666;
  font-size: 14px;
  margin-bottom: 12px;
  height: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.template-stats {
  display: flex;
  justify-content: center;
  gap: 16px;
  color: #666;
  font-size: 14px;
}

.template-stats span {
  display: flex;
  align-items: center;
  gap: 4px;
}
</style>