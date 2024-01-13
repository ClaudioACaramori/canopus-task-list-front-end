<template>
  <v-container class="task-items">
    <v-row>
      <v-btn class="my-4 mx-4" color="primary" @click="addTaskItem">
        <v-icon>
          mdi-plus
        </v-icon>
        Adicionar
      </v-btn>
    </v-row>

    <v-row class="task-list">
      <v-col v-for="taskItem in getTaskItems" :key="taskItem.id">
        <v-card class="task-card">
          <v-card-item>
            <v-card-title>
              {{ taskItem.description }}
            </v-card-title>

            <v-card-subtitle>
              {{ taskItem.priority }} - {{ taskItem.status }}
            </v-card-subtitle>
          </v-card-item>

          <v-card-text>
            <p>Data de expiração: {{ new Date(taskItem.expires_at) }}</p>

            <p class="mt-4">Anotações:</p>
            <p>{{ taskItem.annotations }}</p>
          </v-card-text>

          <v-card-actions>
            <v-btn @click="startTask" v-if="taskItem.status === 'waiting'">Iniciar</v-btn>
            <v-btn @click="finishTask" v-else-if="taskItem.status === 'active'">Concluir</v-btn>

            <v-btn @click="updateTask" v-if="taskItem.status !== 'done'">Editar</v-btn>
            <v-btn @click="deleteTaskItems(taskItem.id)" v-if="taskItem.status !== 'done'">Remover</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { onMounted } from 'vue';
import { taskItemStore } from '@/store/taskItem';
import { storeToRefs } from 'pinia';
import router from '@/routes';

const { getTaskItems } = storeToRefs(taskItemStore());
const { fetchTaskItems, deleteTaskItems } = taskItemStore();

const startTask = () => {
  console.log('iniciou')
}

const finishTask = () => {
  console.log('terminou')
}

const addTaskItem = () => {
  router.push({ name: 'NewTaskItem' });
}

onMounted(() => {
  fetchTaskItems({});
})
</script>

<style lang="scss">
  .task-items {
    .task-list {
      display: flex;
      gap: 20px;

      .task-card {
        width: 300px;
        float: left;
      }
    }
  }
</style>