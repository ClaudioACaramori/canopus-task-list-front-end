import ApiService from '../api.service';

const UsersResource = {
  login: (params) => ApiService.post('v1/users/sign_in', params),
  show: () => ApiService.get('v1/users/me'),
  index: () => ApiService.get('v1/users'),
  create: (params) => ApiService.post('v1/users', params),
  update: (id, params) => ApiService.put(`v1/users/${id}`, params),
  destroy: (id) => ApiService.delete(`v1/users/${id}`),
};

export default UsersResource;
