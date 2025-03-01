<script setup lang="ts">
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

interface Item {
  title: string
  value: string
}

const sidebarNavItems: Item[] = [
  {
    title: 'Profile',
    value: 'profile',
  },
  {
    title: 'Account',
    value: 'account',
  },
  {
    title: 'Appearance',
    value: 'appearance',
  },
  {
    title: 'Notifications',
    value: 'notifications',
  },
  {
    title: 'Display',
    value: 'display',
  },
]

const props = defineProps<{
  activeView: string
}>()

const emit = defineEmits(['update:activeView'])

const switchView = (value: string) => {
  emit('update:activeView', value)
}
</script>

<template>
  <nav class="flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1">
    <Button
      v-for="item in sidebarNavItems"
      :key="item.title"
      variant="ghost"
      :class="cn(
        'w-full text-left justify-start',
        activeView === item.value
          ? 'bg-muted text-foreground font-medium' 
          : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
      )"
      @click="switchView(item.value)"
    >
      {{ item.title }}
    </Button>
  </nav>
</template>