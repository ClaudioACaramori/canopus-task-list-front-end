<template>
  <div class="new-task-item">
    <v-row class="my-4">
      <v-btn color="primary" @click="goBack" class="mr-4">
        <v-icon>
          mdi-arrow-left
        </v-icon>

        Voltar
      </v-btn>
      <h1>Adicionar Tarefa</h1>
    </v-row>

    <v-card class="form-card">
      <v-card-text>
        <v-text-field
          v-model="description"
          label="Descrição"
        ></v-text-field>

        <v-select
          v-model="selectedPriority"
          label="Prioridade"
          :items="priorityList"
          item-title="title"
          item-value="value"
        ></v-select>

        <v-select
          v-model="selectedCategory"
          label="Categoria"
          :items="getCategories"
          item-title="name"
          item-value="id"
        ></v-select>

        <v-text-field
          v-model="expires_at"
          label="Data Limite"
          type="date"
        ></v-text-field>

        <v-text-field
          v-model="annotations"
          label="Anotações"
          type="text"
        ></v-text-field>
      </v-card-text>

      <v-card-actions>
        <v-btn @click="createTask">
          Criar Tarefa
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { categoryStore } from '@/store/category';
import { taskItemStore } from '@/store/taskItem';
import { storeToRefs } from 'pinia';

const { getCategories } = storeToRefs(categoryStore());
const { fetchCategories } = categoryStore();
const { createTaskItems } = taskItemStore();

const description = ref('')
const selectedPriority = ref('')
const selectedCategory = ref('')
const expires_at = ref('')
const annotations = ref('')

const priorityList = computed(() => {
  return [
    {
      title: 'Urgente',
      value: 1
    },
    {
      title: 'Alta',
      value: 2
    },
    {
      title: 'Média',
      value: 3
    },
    {
      title: 'Baixa',
      value: 4
    },
    {
      title: 'Muito Baixa',
      value: 5
    },
  ]
})

const goBack = () => {
  window.history.go(-1)
}

const createTask = () => {
  const task = {
    description: description.value,
    priority: selectedPriority.value,
    category_id: selectedCategory.value,
    expires_at: expires_at.value,
    annotations: annotations.value
  }
  createTaskItems(task)
  goBack()
}

onMounted(() => {
  fetchCategories()
})
</script>

<style lang="scss">
.new-task-item {
  .form-card {
    margin: auto;
    width: 500px;
    max-width: 100%;
  }
}
</style>