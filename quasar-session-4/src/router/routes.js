const routes = [
  {
    path: '/',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [
      { path: '', redirect: '/contacts' },
      { path: 'contacts', component: () => import('@/pages/ContactsPage.vue') },
      { path: 'profile', component: () => import('@/pages/ProfilePage.vue') },
      { path: 'register', component: () => import('@/pages/RegisterPage.vue') },
      { path: 'courses', component: () => import('@/pages/CoursesPage.vue') },
    ],
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('@/pages/ErrorNotFound.vue'),
  },
]

export default routes

