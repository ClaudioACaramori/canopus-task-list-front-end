import { defineStore } from 'pinia';
import CategoriesResource from '@/api/resources/categories';

export const categoryStore = defineStore({
  id: 'categories',

  state: () => ({
    categories: [],
  }),

  getters: {
    getCategories: (state) => state.categories,
  },

  actions: {
    fetchCategories(payload) {
      CategoriesResource.index(payload).then((response) => {
        this.categories = response;
      });
    },

    createCategory(payload) {
      CategoriesResource.create(payload).then((response) => {
        this.categories.push(response);
      });
    },

    updateCategory(id, payload) {
      CategoriesResource.update(id, payload).then((response) => {
        this.categories = this.categories.map((category) => {
          if (category.id === response.id) {
            return response;
          }
          return category;
        });
      });
    },

    deleteCategory(id) {
      CategoriesResource.destroy(id).then(() => {
        this.categories = this.categories.filter((category) => category.id !== id);
      });
    }
  }
});
