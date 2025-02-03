import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SignIn from '../views/SignIn.vue'
import Workspace from '../views/Workspace.vue'
import Agent from '../views/Agent.vue'
import Chat from '../views/Chat.vue'
import Pricing from '../views/Pricing.vue'
import AgentSetting from '../views/AgentSetting.vue'
import Knowledge from '../views/Knowledge.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/pricing',
    name: 'Pricing',
    component: Pricing
  },
  {
    path: '/workspace',
    name: 'Workspace',
    component: Workspace,
    children: [
      {
        path: 'agent',
        name: 'Agent',
        component: Agent
      },
      {
        path: 'chat',
        name: 'Chat',
        component: Chat
      },
      {
        path: 'agent/:id/setting',
        name: 'AgentSetting',
        component: AgentSetting
      },
      {
        path: 'knowledge',
        name: 'Knowledge',
        component: Knowledge
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router