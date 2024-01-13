import { createRouter, createWebHistory } from 'vue-router';
import { useSessionStore } from '@/store/session';
import routes from './appRoutes';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, _from, next) => {
  const store = useSessionStore();

  if (to.meta.requiresAuth && !store.hasSession) {
    next('/login');
  } else {
    next();
  }
});

export default router;
