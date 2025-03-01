<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'
import DateRangePicker from './components/DateRangePicker.vue'
import MainNav from './components/MainNav.vue'
import Overview from './components/Overview.vue'
import RecentSales from './components/RecentSales.vue'

import Search from './components/Search.vue'
import TeamSwitcher from './components/TeamSwitcher.vue'
import UserNav from './components/UserNav.vue'
</script>

<template>
  <!-- <div class="md:hidden">
    <VPImage
      alt="Dashboard"
      width="1280"
      height="1214" class="block" :image="{
        dark: '/examples/dashboard-dark.png',
        light: '/examples/dashboard-light.png',
      }"
    />
  </div> -->

  <div class="hidden flex-col md:flex">
    <div class="border-b">
      <div class="flex h-16 items-center px-4">
        <TeamSwitcher />
        <MainNav class="mx-6" />
        <div class="ml-auto flex items-center space-x-4">
          <Search />
          <UserNav />
        </div>
      </div>
    </div>
    <RouterView />

  </div>
</template>