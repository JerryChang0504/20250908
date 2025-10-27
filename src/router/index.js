// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import UserPost from '@/views/UserPost.vue'
import Users from '@/views/Users.vue'
import UsersList from '@/views/UsersList.vue'
import UserspPofile from '@/views/UserspPofile.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/users/:username/posts/:postId', component: UserPost },
  {
    path: '/users',
    component: Users,
    children: [
      { path: 'list', component: UsersList },
      { path: 'profile', component: UserspPofile },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
