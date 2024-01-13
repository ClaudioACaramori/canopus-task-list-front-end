import { defineStore } from 'pinia';
import UsersResource from '@/api/resources/users';
import { useSessionStore } from './session';

export const useUserStore = defineStore({
  id: 'users',

  state: () => ({
    user: null,
    users: [],
  }),

  getters: {
    currentUser: (state) => state.user,
    getUsers: (state) => state.users,
  },

  actions: {
    login(payload) {
      UsersResource.login(payload).then((response) => {
        useSessionStore().createSession(response);

        this.user = response;
      });
    },

    refreshUser() {
      UsersResource.show().then((response) => {
        useSessionStore().refreshSession(response);
        this.user = response;
      }).catch(() => {});
    },

    setUser(user) {
      this.user = user;
    },

    logout() {
      this.user = null;
      useSessionStore().destroySession();
    },

    createUser(payload) {
      UsersResource.create(payload).then((response) => {
        this.users.push(response);
      });
    },

    fetchUsers() {
      UsersResource.index().then((response) => {
        this.users = response;
      });
    },
  },
});
