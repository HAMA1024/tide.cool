<template>
  <el-dialog
    v-model="dialogVisible"
    title="AI助手设置"
    width="80%"
    class="agent-setting-dialog"
  >
    <div class="agent-setting">
      <div class="setting-sidebar">
        <el-menu
          :default-active="activeMenu"
          class="setting-menu"
          @select="handleMenuSelect"
        >
          <el-menu-item index="assistant">
            <el-icon><User /></el-icon>
            <span>助手</span>
          </el-menu-item>
          <el-menu-item index="rules">
            <el-icon><List /></el-icon>
            <span>规则</span>
          </el-menu-item>
          <el-menu-item index="knowledge">
            <el-icon><Files /></el-icon>
            <span>知识</span>
          </el-menu-item>
        </el-menu>
      </div>

      <div class="setting-content">
        <div class="setting-header">
          <el-tabs v-model="activeTab">
            <el-tab-pane label="编排" name="arrange" />
            <el-tab-pane label="日志" name="logs" />
            <el-tab-pane label="发布" name="publish" />
            <el-tab-pane label="分析" name="analyze" />
            <el-tab-pane label="效果监控" name="monitor" />
          </el-tabs>
        </div>

        <div class="setting-main">
          <div class="setting-section">
            <h2>角色设定</h2>
            <el-input
              v-model="role"
              type="textarea"
              :rows="4"
              placeholder="请输入角色设定..."
            />
          </div>

          <div class="setting-section">
            <h2>规则配置</h2>
            <div class="rules-container">
              <el-input
                v-model="rules"
                type="textarea"
                :rows="6"
                placeholder="请输入规则配置..."
              />
            </div>
          </div>

          <div class="setting-section">
            <h2>开场白</h2>
            <el-input
              v-model="greeting"
              type="textarea"
              :rows="3"
              placeholder="请输入开场白..."
            />
          </div>
        </div>
      </div>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="saveSettings">保存</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref } from 'vue'
import { User, List, Files } from '@element-plus/icons-vue'

const dialogVisible = ref(false)
const activeMenu = ref('assistant')
const activeTab = ref('arrange')
const role = ref('')
const rules = ref('')
const greeting = ref('')

const handleMenuSelect = (key) => {
  activeMenu.value = key
}

const saveSettings = () => {
  // TODO: 实现保存设置的逻辑
  console.log('保存设置', {
    role: role.value,
    rules: rules.value,
    greeting: greeting.value
  })
  dialogVisible.value = false
}
</script>

<style scoped>
.agent-setting-dialog :deep(.el-dialog__body) {
  padding: 0;
}

.agent-setting {
  display: flex;
  height: 80vh;
}

.setting-sidebar {
  width: 200px;
  border-right: 1px solid #eee;
}

.setting-menu {
  height: 100%;
}

.setting-content {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.setting-header {
  padding: 0 24px;
  border-bottom: 1px solid #eee;
}

.setting-main {
  flex: 1;
  padding: 24px;
  overflow-y: auto;
}

.setting-section {
  margin-bottom: 32px;
}

.setting-section h2 {
  margin-bottom: 16px;
  font-size: 18px;
  font-weight: 600;
  color: #333;
}

.rules-container {
  margin-top: 16px;
}

.dialog-footer {
  padding: 20px 24px;
  text-align: right;
}
</style>