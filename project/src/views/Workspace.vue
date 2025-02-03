<template>
  <div class="workspace-container">
    <!-- 左侧导航栏 -->
    <div class="sidebar" :class="{ 'collapsed': isCollapsed }">
      <el-menu
        default-active="1"
        class="sidebar-menu"
        :collapse="isCollapsed">
        <div class="collapse-button" @click="toggleSidebar">
          <el-icon>
            <component :is="isCollapsed ? 'Expand' : 'Fold'" />
          </el-icon>
        </div>
        <el-menu-item index="1" @click="$router.push('/workspace/agent')" class="menu-item">
          <el-icon><Avatar /></el-icon>
          <span>智能体</span>
        </el-menu-item>
        <el-menu-item index="2" @click="$router.push('/workspace/chat')" class="menu-item">
          <el-icon><ChatDotRound /></el-icon>
          <span>CHAT</span>
        </el-menu-item>
        <el-menu-item index="3" class="menu-item">
          <el-icon><Grid /></el-icon>
          <span>应用</span>
        </el-menu-item>
        <el-menu-item index="4" @click="$router.push('/workspace/knowledge')" class="menu-item">
          <el-icon><Document /></el-icon>
          <span>知识库</span>
        </el-menu-item>
        <el-menu-item index="5" class="menu-item">
          <el-icon><DataLine /></el-icon>
          <span>数据库</span>
        </el-menu-item>
        <el-menu-item index="6" class="menu-item">
          <el-icon><Link /></el-icon>
          <span>渠道接入</span>
        </el-menu-item>
        <el-menu-item index="7" class="menu-item">
          <el-icon><Monitor /></el-icon>
          <span>客户端</span>
        </el-menu-item>
      </el-menu>
    </div>

    <!-- 主要内容区域 -->
    <div class="main-content">
      <div class="content-header">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/workspace' }">工作空间</el-breadcrumb-item>
          <el-breadcrumb-item v-if="$route.name === 'Agent'">智能体</el-breadcrumb-item>
          <el-breadcrumb-item v-if="$route.name === 'Chat'">CHAT</el-breadcrumb-item>
        </el-breadcrumb>
      </div>

      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Edit, Grid, Document, DataLine, Connection, Link, Monitor, Plus, Expand, Fold, Avatar, ChatDotRound } from '@element-plus/icons-vue'

const isCollapsed = ref(false)
const toggleSidebar = () => {
  isCollapsed.value = !isCollapsed.value
}
</script>

<style scoped>
.workspace-container {
  display: flex;
  height: 100vh;
}

.sidebar {
  width: 200px;
  height: 100%;
  border-right: 1px solid #e6e6e6;
  transition: width 0.3s;
  position: relative;
}

.sidebar.collapsed {
  width: 64px;
}

.collapse-button {
  position: absolute;
  right: -12px;
  top: 50px;
  width: 24px;
  height: 24px;
  background-color: #fff;
  border: 1px solid #e6e6e6;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: transform 0.3s;
}

.collapse-button:hover {
  background-color: #f5f7fa;
}

.sidebar.collapsed .collapse-button {
  transform: rotate(180deg);
}

.sidebar-menu {
  height: 100%;
  border-right: none;
}

.menu-item {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 20px;
  transition: all 0.3s;
}

.sidebar.collapsed .menu-item {
  flex-direction: column;
  padding: 10px 0;
}

.sidebar.collapsed .menu-item .el-icon {
  margin-right: 0;
  margin-bottom: 4px;
}

.sidebar.collapsed .menu-item span {
  font-size: 12px;
  white-space: normal;
  text-align: center;
  line-height: 1.2;
}

.main-content {
  flex: 1;
  padding: 20px;
  background-color: #f5f7fa;
}

.content-header {
  margin-bottom: 20px;
}

.content-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.app-card {
  height: 180px;
  display: flex;
  flex-direction: column;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 12px;
}

.card-title {
  h3 {
    margin: 0;
    font-size: 16px;
  }
  p {
    margin: 4px 0 0;
    font-size: 12px;
    color: #909399;
  }
}

.card-description {
  flex: 1;
  margin: 0;
  color: #606266;
  font-size: 14px;
}

.card-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
}

.add-card {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
</style>