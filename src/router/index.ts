import { createMemoryHistory, createRouter } from 'vue-router'

import Homeview from '../views/Homeview.vue'
import ListView from '../views/Listview.vue'
import ChartView from '../views/Chartview.vue'
import SettingView from '../views/Setting.vue'
const routes = [
  { path: '/', name: "home", component: Homeview },
  { path: '/list', name: "list", component: ListView },
  { path: '/chart', name: "chart", component: ChartView },
  { path: '/settings', name: "settings", component: SettingView },
]

const router = createRouter({
  history: createMemoryHistory(import.meta.env.BASE_URL),
  routes,
})

export default router