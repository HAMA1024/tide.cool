<template>
  <el-card class="agent-card" shadow="hover">
    <div class="agent-info">
      <el-avatar :size="40" :src="agent.avatar" />
      <div class="agent-details">
        <h3>{{ agent.name }}</h3>
        <p>{{ agent.code }}</p>
      </div>
      <el-icon class="setting-icon" @click="goToSetting"><Setting /></el-icon>
    </div>
    
    <div class="agent-stats">
      <div class="stat-item">
        <el-icon><Document /></el-icon>
        <span>{{ agent.templateCount }}</span>
      </div>
      <div class="stat-item">
        <el-icon><Star /></el-icon>
        <span>{{ agent.favoriteCount }}</span>
      </div>
      <div class="stat-item">
        <el-icon><View /></el-icon>
        <span>{{ agent.viewCount }}</span>
      </div>
      <div class="stat-item">
        <el-icon><ChatDotRound /></el-icon>
        <span>{{ agent.messageCount }}</span>
      </div>
    </div>
  </el-card>
</template>

<script setup>
import { Document, Star, View, ChatDotRound, Setting } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const props = defineProps({
  agent: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['openSetting'])

const goToSetting = () => {
  emit('openSetting', props.agent)
}
</script>

<style scoped>
.agent-card {
  border-radius: 8px;
}

.agent-info {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
  position: relative;
}

.agent-details h3 {
  margin: 0;
  font-size: 16px;
}

.agent-details p {
  margin: 4px 0 0;
  color: #666;
  font-size: 14px;
}

.agent-stats {
  display: flex;
  justify-content: space-around;
  border-top: 1px solid #eee;
  padding-top: 12px;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 4px;
  color: #666;
}

.setting-icon {
  position: absolute;
  right: 0;
  top: 0;
  font-size: 18px;
  color: #666;
  cursor: pointer;
  transition: color 0.3s;
}

.setting-icon:hover {
  color: #409EFF;
}
</style>