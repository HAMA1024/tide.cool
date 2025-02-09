<template>
  <div id="website" class="min-h-screen bg-gray-900">
    <RouterView>  </RouterView>
    <nav class="bg-[#0A0B2E]/80 backdrop-blur-sm border-b border-gray-700 sticky top-0 z-40">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0 flex items-center">
              <h1 class="text-2xl font-bold text-white">
                <img id="logo" src="./assets/tide-logo.png" alt="Tide.cool Logo" />
              </h1>
            </div>
            <div class="hidden md:flex md:ml-10 space-x-8">
              <a href="https://huangs-organization-8.gitbook.io/tide.cool" target="_blank" class="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">{{ $t('nav.docs') }}</a>
              <a href="#" class="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">{{ $t('nav.channels') }}</a>
              <router-link to="/pricing" class="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">{{ $t('nav.pricing') }}</router-link>
              <a href="#" class="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">{{ $t('nav.faq') }}</a>
              <a href @click="goToWorkspace" class="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">{{ $t('nav.workspace') }}</a>
            </div>
          </div>
          <div class="flex items-center">
            <template v-if="userStore.user">
              <div class="relative">
                <button @click="isUserMenuOpen = !isUserMenuOpen" class="flex items-center text-gray-300 hover:text-white px-3 py-2">
                  <span class="mr-2">{{ userStore.displayName }}</span>
                  <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div v-if="isUserMenuOpen" class="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-gray-700 ring-1 ring-black ring-opacity-5">
                  <div class="py-1">
                    <a @click="signOut" class="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 cursor-pointer">{{ $t('nav.signOut') }}</a>
                  </div>
                </div>
              </div>
            </template>
            <router-link v-else to="/signin" class="text-gray-300 hover:text-white px-3 py-2">{{ $t('nav.signIn') }}</router-link>
            <!-- Mobile menu button -->
            <button @click="isOpen = !isOpen" class="md:hidden ml-2 p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile menu -->
      <div v-if="isOpen" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="https://huangs-organization-8.gitbook.io/tide.cool" target="_blank" class="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">{{ $t('nav.docs') }}</a>
          <a href="#" class="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Channels</a>
          <router-link to="/pricing" class="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Pricing</router-link>
          <a href="#" class="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">FAQ</a>
        </div>
      </div>
     
    </nav>
 

    <main>
      <!-- Hero Section -->
      <div class="hero-gradient relative overflow-hidden">
        <div id = "bg1" class="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"></div>
        <div id = "bg2" class="absolute inset-0 md:left-1/2">
          <img 
            src="./assets/hero-bg.png" 
            alt="" 
            class="w-full h-full opacity-20 object-cover md:object-contain md:object-right"
          />
        </div>
        <div id = "hero-content" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative">
          <div class="md:w-2/3 text-left">
            <h1 class="text-5xl font-bold tracking-tight text-white sm:text-6xl">
              {{ $t('hero.title') }}
              <span class="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                {{ $t('hero.titleHighlight') }}
              </span>
            </h1>
            <p class="mt-6 text-xl text-gray-300 max-w-2xl" v-html="$t('hero.description').replace('\n', '<br/>')">
            </p>
          </div>
        </div>
      </div>

      <!-- Features Section -->
      <div class="features-gradient py-24">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center">
            <h2 class="text-3xl font-bold text-white">Features </h2>
            <p class="mt-4 text-gray-300">What makes our AI Agents magnificent</p>
          </div>

          <div class="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            <div class="flex flex-col items-center">
              <div class="rounded-lg bg-gray-900/50 backdrop-blur-sm p-6 shadow-lg border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
                <h3 class="text-xl font-semibold text-white">{{ $t('features.cards.nlp.title') }}</h3>
                <p class="mt-4 text-gray-300">{{ $t('features.cards.nlp.description') }}</p>
              </div>
            </div>
            <div class="flex flex-col items-center">
              <div class="rounded-lg bg-gray-900/50 backdrop-blur-sm p-6 shadow-lg border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
                <h3 class="text-xl font-semibold text-white">{{ $t('features.cards.automation.title') }}</h3>
                <p class="mt-4 text-gray-300">{{ $t('features.cards.automation.description') }}</p>
              </div>
            </div>
            <div class="flex flex-col items-center">
              <div class="rounded-lg bg-gray-900/50 backdrop-blur-sm p-6 shadow-lg border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
                <h3 class="text-xl font-semibold text-white">{{ $t('features.cards.learning.title') }}</h3>
                <p class="mt-4 text-gray-300">{{ $t('features.cards.learning.description') }}</p>
              </div>
            </div>
            <div class="flex flex-col items-center">
              <div class="rounded-lg bg-gray-900/50 backdrop-blur-sm p-6 shadow-lg border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
                <h3 class="text-xl font-semibold text-white">{{ $t('features.cards.security.title') }}</h3>
                <p class="mt-4 text-gray-300">{{ $t('features.cards.security.description') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="cta-gradient">
        <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div class="text-center">
            <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to get started?
            </h2>
            <p class="mt-4 text-lg text-blue-100">
              Join thousands of users who are already experiencing the future of AI assistance.
            </p>
            <a href="#" class="mt-8 inline-block rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-blue-600 hover:bg-gray-100 shadow-lg shadow-blue-500/20">
              Start Workspace
            </a>
          </div>
        </div>
      </div>
    </main>

    <footer class="bg-gray-800/80 backdrop-blur-sm">
      <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">Product</h3>
            <ul class="space-y-4">
              <li><a href="#" class="text-base text-gray-300 hover:text-white">Docs</a></li>
              <li><a href="#" class="text-base text-gray-300 hover:text-white">Channels</a></li>
              <li><a href="#" class="text-base text-gray-300 hover:text-white">Pricing</a></li>
              <li><a href="#" class="text-base text-gray-300 hover:text-white">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">Company</h3>
            <ul class="space-y-4">
              <li><a href="#" class="text-base text-gray-300 hover:text-white">About</a></li>
              <li><a href="#" class="text-base text-gray-300 hover:text-white">Blog</a></li>
              <li><a href="#" class="text-base text-gray-300 hover:text-white">Careers</a></li>
              <li><a href="#" class="text-base text-gray-300 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">Legal</h3>
            <ul class="space-y-4">
              <li><a href="#" class="text-base text-gray-300 hover:text-white">Privacy</a></li>
              <li><a href="#" class="text-base text-gray-300 hover:text-white">Terms</a></li>
              <li><a href="#" class="text-base text-gray-300 hover:text-white">Security</a></li>
            </ul>
          </div>
          <div>
            <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">Connect</h3>
            <div class="flex space-x-6">
              <a href="#" class="text-gray-400 hover:text-gray-300">
                <span class="sr-only">X (Twitter)</span>
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-gray-300">
                <span class="sr-only">Discord</span>
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-gray-300">
                <span class="sr-only">Telegram</span>
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.041-.106a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-gray-300">
                <span class="sr-only">GitHub</span>
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="border-t border-gray-700 pt-8">
          <p class="text-base text-gray-400 text-center">
            &copy; 2023 TIDE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>

    <!-- 添加语言切换按钮 -->
    <div class="fixed top-4 right-4 z-50">
      <select v-model="$i18n.locale" class="bg-gray-800 text-white rounded px-2 py-1">
        <option value="en">English</option>
        <option value="zh">中文</option>
      </select>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useUserStore } from './stores/user';
import { getAuth, signOut as firebaseSignOut } from 'firebase/auth';
import { useRouter } from 'vue-router';


const userStore = useUserStore();
const router = useRouter();
const auth = getAuth();

const isOpen = ref(false);
const isUserMenuOpen = ref(false);

const signOut = async () => {
  try {
    await firebaseSignOut(auth);
    userStore.clearUser();
    router.push('/');
  } catch (error) {
    console.error('Sign out error:', error);
  }
  isUserMenuOpen.value = false;
};


const goToHome = () => {
  router.push('/'); // 导航到首页，并添加到历史记录中
};

const goToWorkspace = () => {
  router.replace('/workspace'); // 导航到工作空间
};


</script>