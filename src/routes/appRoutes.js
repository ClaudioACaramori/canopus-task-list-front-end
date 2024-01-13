import Login from '@/views/Login.vue';
import TaskItems from '@/views/TaskItems.vue';
import NewTaskItem from '@/views/NewTaskItem.vue';
import Categories from '@/views/Categories.vue';
import NewCategory from '@/views/NewCategory.vue';
import Users from '@/views/Users.vue';
import NewUser from '@/views/NewUser.vue';

export default [
  {
    path: '/',
    redirect: '/tarefas',
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: '/tarefas',
    name: 'TaskItems',
    component: TaskItems,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/nova-tarefa',
    name: 'NewTaskItem',
    component: NewTaskItem,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/categorias',
    name: 'Categories',
    component: Categories,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/nova-categoria',
    name: 'NewCategory',
    component: NewCategory,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/usuarios',
    name: 'Users',
    component: Users,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/novo-usuario',
    name: 'NewUser',
    component: NewUser,
    meta: {
      requiresAuth: true,
    },
  },
];
