import ApiService from '../api.service';

const TaskItemsResource = {
  index: (query) => ApiService.get('v1/task_items', query),
  create: (params) => ApiService.post('v1/task_items', params),
  update: (id, params) => ApiService.put(`v1/task_items/${id}`, params),
  destroy: (id) => ApiService.delete(`v1/task_items/${id}`),
};

export default TaskItemsResource;
