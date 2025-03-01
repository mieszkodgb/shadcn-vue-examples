<!-- Stteings.vue -->
<script setup lang="ts">
import ProfileForm from '@/components/forms/ProfileForm.vue'
import Account from '@/components/forms/AccountForm.vue'
import Appearance from '@/components/forms/AppearanceForm.vue'
import Notifications from '@/components/forms/NotificationsForm.vue'
import Display from '@/components/forms/DisplayForm.vue'
import FormsLayout from '@/layouts/FormsLayout.vue'
</script>

<template>
  <FormsLayout v-slot="{ activeView }">
    <ProfileForm v-if="activeView === 'profile'" />
    <Account v-else-if="activeView === 'account'" />
    <Appearance v-else-if="activeView === 'appearance'" />
    <Notifications v-else-if="activeView === 'notifications'" />
    <Display v-else-if="activeView === 'display'" />
  </FormsLayout>

</template>
