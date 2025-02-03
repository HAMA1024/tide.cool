<template>
  <div class="knowledge-container">
    <!-- 顶部信息栏 -->
    <div class="top-info">
      <div class="storage-info">
        <span class="title">知识库</span>
        <span class="capacity">剩余容量: 50.0MB</span>
        <el-button type="primary" text @click="handleExpand">扩容</el-button>
      </div>
    </div>

    <!-- 筛选和操作栏 -->
    <div class="filter-bar">
      <div class="left-filters">
        <el-radio-group v-model="activeTab">
          <el-radio-button label="all">全部</el-radio-button>
          <el-radio-button label="recent">最近编辑</el-radio-button>
        </el-radio-group>
      </div>
      
      <div class="right-controls">
        <el-select v-model="selectedGroup" placeholder="全部分组">
          <el-option label="全部分组" value="all" />
          <el-option label="默认分组" value="default" />
        </el-select>
        
        <el-select v-model="selectedTag" placeholder="全部标签">
          <el-option label="全部标签" value="all" />
        </el-select>

        <el-input
          v-model="searchQuery"
          placeholder="搜索..."
          class="search-input"
        >
          <template #prefix>
            <el-icon><Search /></el-icon>
          </template>
        </el-input>
        
        <el-button type="primary" @click="handleCreateKnowledge">
          <el-icon><Plus /></el-icon>
          新建知识库
        </el-button>
      </div>
    </div>

    <!-- 知识库列表 -->
    <div class="knowledge-list">
      <el-table :data="knowledgeList" style="width: 100%">
        <el-table-column label="知识库" min-width="300">
          <template #default="{ row }">
            <div class="knowledge-info">
              <el-icon :size="20"><Document /></el-icon>
              <span class="name">{{ row.name }}</span>
              <el-tag size="small" type="info">{{ row.type }}</el-tag>
            </div>
          </template>
        </el-table-column>
        
        <el-table-column prop="documentCount" label="文档数量" width="120" />
        <el-table-column prop="references" label="引用资源" width="120" />
        <el-table-column prop="updateTime" label="最近编辑" width="180" />
        
        <el-table-column label="操作" width="150" fixed="right">
          <template #default="{ row }">
            <el-button link type="primary" @click="handleEdit(row)">编辑</el-button>
            <el-button link type="danger" @click="handleDelete(row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Plus, Search, Document } from '@element-plus/icons-vue'

// 状态变量
const activeTab = ref('all')
const selectedGroup = ref('all')
const selectedTag = ref('all')
const searchQuery = ref('')

// 模拟数据
const knowledgeList = ref([
  {
    id: 1,
    name: '麦乐（Melody）的梦想衣阁',
    type: '文档',
    documentCount: 1,
    references: 1,
    updateTime: '2天前'
  },
  {
    id: 2,
    name: '电商客服小Y的数据集',
    type: '文档',
    documentCount: 3,
    references: 1,
    updateTime: '2天前'
  }
])

// 处理函数
const handleExpand = () => {
  // 处理扩容逻辑
}

const handleCreateKnowledge = () => {
  // 处理创建知识库逻辑
}

const handleEdit = (row) => {
  // 处理编辑逻辑
}

const handleDelete = (row) => {
  // 处理删除逻辑
}
</script>

<style scoped>
.knowledge-container {
  padding: 20px;
}

.top-info {
  margin-bottom: 20px;
}

.storage-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.storage-info .title {
  font-size: 16px;
  font-weight: bold;
}

.storage-info .capacity {
  color: #666;
}

.filter-bar {
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

.search-input {
  width: 200px;
}

.knowledge-list {
  margin-top: 20px;
}

.knowledge-info {
  display: flex;
  align-items: center;
  gap: 8px;
}

.knowledge-info .name {
  margin: 0 8px;
}
</style>