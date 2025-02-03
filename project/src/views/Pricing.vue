<template>
  <div class="min-h-screen bg-black text-white py-16 px-4">
    <div class="max-w-7xl mx-auto text-center">
      <h1 class="text-5xl font-bold mb-4">Pricing</h1>
      <p class="text-xl text-gray-400 mb-12">
        Start with a free account to speed up your workflow on public projects or boost
        your entire team with instantly-opening production environments.
      </p>



      <!-- Pricing Toggle -->
      <div class="flex justify-center items-center gap-4 mb-12">
        <button class="bg-blue-600 px-4 py-2 rounded-md">Pro</button>
        <button class="text-gray-400 px-4 py-2">Teams</button>
        <div class="flex items-center ml-auto">
          <span class="mr-2">Annual billing</span>
          <div class="w-12 h-6 bg-gray-700 rounded-full p-1 cursor-pointer">
            <div class="w-4 h-4 bg-gray-400 rounded-full"></div>
          </div>
        </div>
      </div>

      <!-- Pricing Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- Pro Card -->
        <div class="border border-blue-500 rounded-lg p-6 flex flex-col">
          <h2 class="text-2xl font-bold mb-2">Pro</h2>
          <div class="flex items-center mb-4">
            <span class="text-gray-400">10M tokens</span>
          </div>
          <p class="text-gray-400 mb-8">Ideal for hobbyists and casual users for light, exploratory use.</p>
          <div class="mt-auto">
            <div class="text-3xl font-bold mb-2">$20<span class="text-lg font-normal">/month</span></div>
            <p class="text-sm text-gray-400 mb-4">Billed monthly</p>
            <button class="w-full bg-gray-800 py-2 rounded-md">Manage current plan</button>
          </div>
        </div>

        <!-- Pro 50 Card -->
        <div class="bg-gray-900 rounded-lg p-6 flex flex-col">
          <h2 class="text-2xl font-bold mb-2">Pro 50</h2>
          <div class="flex items-center mb-4">
            <span class="text-green-500">26M tokens</span>
            <span class="text-gray-400 line-through ml-2">25M tokens</span>
          </div>
          <p class="text-gray-400 mb-8">Designed for professionals who need to use Bolt a few times per week.</p>
          <div class="mt-auto">
            <div class="text-3xl font-bold mb-2">$50<span class="text-lg font-normal">/month</span></div>
            <p class="text-sm text-gray-400 mb-4">Billed monthly</p>
            <button class="w-full bg-blue-600 py-2 rounded-md">Upgrade to Pro 50</button>
          </div>
        </div>

        <!-- Pro 100 Card -->
        <div class="bg-gray-900 rounded-lg p-6 flex flex-col">
          <h2 class="text-2xl font-bold mb-2">Pro 100</h2>
          <div class="flex items-center mb-4">
            <span class="text-green-500">55M tokens</span>
            <span class="text-gray-400 line-through ml-2">50M tokens</span>
          </div>
          <p class="text-gray-400 mb-8">Perfect for heavy users looking to enhance daily workflows.</p>
          <div class="mt-auto">
            <div class="text-3xl font-bold mb-2">$100<span class="text-lg font-normal">/month</span></div>
            <p class="text-sm text-gray-400 mb-4">Billed monthly</p>
            <button class="w-full bg-blue-600 py-2 rounded-md">Upgrade to Pro 100</button>
          </div>
        </div>

        <!-- Pro 200 Card -->
        <div class="bg-gray-900 rounded-lg p-6 flex flex-col">
          <h2 class="text-2xl font-bold mb-2">Pro 200</h2>
          <div class="flex items-center mb-4">
            <span class="text-green-500">120M tokens</span>
            <span class="text-gray-400 line-through ml-2">100M tokens</span>
          </div>
          <p class="text-gray-400 mb-8">Best for power users relying on Bolt as a core tool for continuous use.</p>
          <div class="mt-auto">
            <div class="text-3xl font-bold mb-2">$200<span class="text-lg font-normal">/month</span></div>
            <p class="text-sm text-gray-400 mb-4">Billed monthly</p>
            <button class="w-full bg-blue-600 py-2 rounded-md">Upgrade to Pro 200</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Component logic can be added here if needed
</script>