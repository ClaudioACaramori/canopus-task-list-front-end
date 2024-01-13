<template>
  <v-container class="categories">
    <v-row>
      <v-btn class="my-4 mx-4" color="primary" @click="addCategory">
        <v-icon>
          mdi-plus
        </v-icon>
        Adicionar
      </v-btn>
    </v-row>

    <v-row class="category-list">
      <v-col v-for="category in getCategories" :key="category.id">
        <v-card class="category-card">
          <v-card-item>
            <v-card-title>
              {{ category.name }}
            </v-card-title>

            <v-card-subtitle>
              {{ category.priority }}
            </v-card-subtitle>
          </v-card-item>

          <v-card-text>
            {{ category.description }}
          </v-card-text>

          <v-card-actions>
            <v-btn @click="deleteCategory(category.id)">Remover</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { onMounted } from 'vue';
import { categoryStore } from '@/store/category';
import { storeToRefs } from 'pinia';
import router from '@/routes';

const { getCategories } = storeToRefs(categoryStore());
const { fetchCategories, deleteCategory } = categoryStore();

const addCategory = () => {
  router.push({ name: 'NewCategory' });
}

onMounted(() => {
  fetchCategories({});
})
</script>

<style lang="scss">
  .categories {
    .category-list {
      display: flex;
      gap: 20px;

      .category-card {
        width: 300px;
        float: left;
      }
    }
  }
</style>