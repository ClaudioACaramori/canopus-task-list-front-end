<template>
  <v-container class="users">
    <v-row>
      <v-btn class="my-4 mx-4" color="primary" @click="addUser">
        <v-icon>
          mdi-plus
        </v-icon>
        Adicionar
      </v-btn>
    </v-row>

    <v-row class="user-list">
      <v-col v-for="user in getUsers" :key="user.id">
        <v-card class="user-card">
          <v-card-item>
            <v-card-title>
              {{ user.name }}
            </v-card-title>

            <v-card-subtitle>
              {{ user.profile }}
            </v-card-subtitle>
          </v-card-item>

          <v-card-text>
            {{ user.email }}
          </v-card-text>

          <v-card-actions>
            <v-btn @click="deleteUser(user.id)">Remover</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { onMounted } from 'vue';
import { useUserStore } from '@/store/user';
import { storeToRefs } from 'pinia';
import router from '@/routes';

const { getUsers } = storeToRefs(useUserStore());
const { fetchUsers, deleteUser } = useUserStore();

const addUser = () => {
  router.push({ name: 'NewUser' });
}

onMounted(() => {
  fetchUsers({});
})
</script>

<style lang="scss">
  .users {
    .user-list {
      display: flex;
      gap: 20px;

      .user-card {
        width: 300px;
        float: left;
      }
    }
  }
</style>