<template>
  <div class="login">
    <h1>Canopus Task List</h1>

    <v-card class="login-card">
      <v-card-text>
        <v-form>
          <v-text-field
            v-model="email"
            label="Email"
            outlined
          ></v-text-field>

          <v-text-field
            v-model="password"
            label="Senha"
            outlined
            type="password"
          ></v-text-field>

          <v-btn @click="loginUser" color="primary">Entrar</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/store/user';
import { useSessionStore } from '@/store/session';
import { storeToRefs } from 'pinia';

const email = ref('');
const password = ref('');

const { hasSession } = storeToRefs(useSessionStore());
const { login } = useUserStore();
const router = useRouter();

const loginUser = () => {
  const userData = { email: email.value, password: password.value };
  login(userData);
};

watch(hasSession, (value) => {
  if (value) router.push({ name: 'TaskItems' });
});

onMounted(() => {
  if (hasSession.value) router.push({ name: 'TaskItems' });
});
</script>

<style lang="scss">
.login {
  h1 {
    text-align: center;
    margin: 7rem 0 3rem 0;
  }

  .login-card {
    margin: auto;
    width: 500px;
  }
}
</style>