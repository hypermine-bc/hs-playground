
const routes = [
  {
    path: '/',
    component: () => import('layouts/LandingLayout.vue'),
    meta: {
      requiresAuth: false
    },
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/dashboard',
    component: () => import('layouts/MyLayout.vue'),
    meta: {
      requiresAuth: true
    },
    children: [
      { path: '', component: () => import(/* webpackChunkName: "dashboard" */'pages/dashboard.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
