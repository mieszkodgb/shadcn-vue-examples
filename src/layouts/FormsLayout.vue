<script setup lang="ts">
import { Separator } from '@/components/ui/separator'
import SidebarNav from '@/components/SidebarNav.vue'
import { ref } from 'vue'

const activeView = ref('profile')
</script>

<template>
  <div class="md:hidden">
    <!-- Mobile view content -->
  </div>
  <div class="hidden space-y-6 p-10 pb-16 md:block">
    <div class="space-y-0.5">
      <h2 class="text-2xl font-bold tracking-tight">
        Settings
      </h2>
      <p class="text-muted-foreground">
        Manage your account settings and set e-mail preferences.
      </p>
    </div>
    <Separator class="my-6" />
    <div class="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
      <aside class="-mx-4 lg:w-1/5">
        <SidebarNav 
          :activeView="activeView" 
          @update:activeView="activeView = $event" 
        />
      </aside>
      <div class="flex-1 lg:max-w-2xl">
        <div class="space-y-6">
          <slot :activeView="activeView">
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>