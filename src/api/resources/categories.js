import ApiService from '../api.service';

const CategoriesResource = {
  index: (query) => ApiService.get('v1/categories', query),
  create: (params) => ApiService.post('v1/categories', params),
  update: (id, params) => ApiService.put(`v1/categories/${id}`, params),
  destroy: (id) => ApiService.delete(`v1/categories/${id}`),
};

export default CategoriesResource;
