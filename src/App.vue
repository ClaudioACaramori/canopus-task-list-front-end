<template>
  <v-app>
    <v-main class="app">
      <v-navigation-drawer  color="primary" v-if="hasSession">
        <v-list-item title="Task List" subtitle="Canopus"></v-list-item>
        <v-divider></v-divider>
        <v-list-item
          link
          title="Tarefas"
          @click="router.push({ name: 'TaskItems' })"
        ></v-list-item>

        <v-list-item
          link
          title="Categorias"
          @click="router.push({ name: 'Categories' })"
          v-if="currentUser.profile === 'admin'"
        ></v-list-item>

        <v-list-item
          link
          title="Usuários"
          @click="router.push({ name: 'Users' })"
          v-if="currentUser.profile === 'admin'"
        ></v-list-item>
      </v-navigation-drawer>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
  import { useRoute, useRouter } from 'vue-router';
  import { storeToRefs } from 'pinia';
  import { onMounted, watch } from 'vue';

  import { useUserStore } from '@/store/user';
  import { useSessionStore } from '@/store/session';

  const userStore = useUserStore();
  const route = useRoute();
  const router = useRouter();

  const { currentUser } = storeToRefs(userStore);
  const { hasSession } = storeToRefs(useSessionStore());

  onMounted(() => {
    if (hasSession.value && !currentUser.value) {
      userStore.refreshUser();
    }
  });

  watch(hasSession, (value) => {
    if (!value) router.push({ name: 'Login' });
  });
</script>

<style lang="scss">
  body {
  // .el-aside {
  //   width: var(--el-aside-width, 280px);

  //   .nav {
  //     width: 280px;
  //     position: fixed;
  //     background-color: $navigation_background_color;
  //     border: none;
  //   }
  // }

  // .el-main {
  //   padding: 0;
  // }

  .app {
    &.base-style {
      background-color: #FFFFFF;
      min-height: 100vh;
      padding: 100px 146px;
    }
  }
}

@media screen and (max-width: 1440px) {
  body {
    // .el-aside {
    //   width: var(--el-aside-width, 230px);

    //   .nav {
    //     width: 230px;
    //   }
    // }

    .app {
      &.base-style {
        padding: 100px 40px;
      }
    }
  }
}
</style>