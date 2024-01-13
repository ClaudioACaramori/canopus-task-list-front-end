<template>
  <div class="new-category">
    <v-row class="my-4">
      <v-btn color="primary" @click="goBack" class="mr-4">
        <v-icon>
          mdi-arrow-left
        </v-icon>

        Voltar
      </v-btn>
      <h1>Adicionar Categoria</h1>
    </v-row>

    <v-card class="form-card">
      <v-card-text>
        <v-text-field
          v-model="name"
          label="Nome"
        ></v-text-field>

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
      </v-card-text>

      <v-card-actions>
        <v-btn @click="newCategory">
          Criar Categoria
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { categoryStore } from '@/store/category';

const { createCategory } = categoryStore();

const name = ref('')
const description = ref('')
const selectedPriority = ref('')

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

const newCategory = () => {
  const category = {
    name: name.value,
    description: description.value,
    priority: selectedPriority.value,
  }
  createCategory(category)
  goBack()
}
</script>

<style lang="scss">
.new-category {
  .form-card {
    margin: auto;
    width: 500px;
    max-width: 100%;
  }
}
</style>