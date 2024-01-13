import { defineStore } from 'pinia';
import TaskItemsResource from '@/api/resources/taskItems';

export const taskItemStore = defineStore({
  id: 'taskItems',

  state: () => ({
    taskItems: [],
  }),

  getters: {
    getTaskItems: (state) => state.taskItems,
  },

  actions: {
    fetchTaskItems(payload) {
      TaskItemsResource.index(payload).then((response) => {
        this.taskItems = response;
      });
    },
    createTaskItems(payload) {
      TaskItemsResource.create(payload).then((response) => {
        this.taskItems.push(response);
      });
    },

    updateTaskItems(id, payload) {
      TaskItemsResource.update(id, payload).then((response) => {
        this.taskItems = this.taskItems.map((taskItem) => {
          if (taskItem.id === response.id) {
            return response;
          }
          return taskItem;
        });
      });
    },

    deleteTaskItems(id) {
      TaskItemsResource.destroy(id).then(() => {
        this.taskItems = this.taskItems.filter((taskItem) => taskItem.id !== id);
      });
    }
  }
});
