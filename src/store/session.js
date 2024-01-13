import { defineStore } from 'pinia';

export const useSessionStore = defineStore({
  id: 'sessions',
  persist: true,

  state: () => ({
    email: null,
    authentication_token: null,
  }),

  getters: {
    hasSession(state) {
      return !!state.email && !!state.authentication_token;
    },
    getEmail(state) {
      return state.email;
    },
    getToken(state) {
      return state.authentication_token;
    },
  },

  actions: {
    createSession(payload) {
      if (payload) {
        if (payload.email && payload.authentication_token) {
          this.email = payload.email;
          this.authentication_token = payload.authentication_token;
        }
      }
    },

    refreshSession(payload) {
      this.destroySession();
      this.createSession(payload);
    },

    destroySession() {
      this.email = null;
      this.authentication_token = null;
    },

    updateToken(newToken) {
      this.authentication_token = newToken;
    },
  },
});
