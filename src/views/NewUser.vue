<template>
  <div class="new-user">
    <v-row class="my-4">
      <v-btn color="primary" @click="goBack" class="mr-4">
        <v-icon>
          mdi-arrow-left
        </v-icon>

        Voltar
      </v-btn>
      <h1>Adicionar Usuário</h1>
    </v-row>

    <v-card class="form-card">
      <v-card-text>
        <v-text-field
          v-model="name"
          label="Nome"
        ></v-text-field>

        <v-text-field
          v-model="username"
          label="Username"
        ></v-text-field>

        <v-text-field
          v-model="email"
          label="E-mail"
        ></v-text-field>

        <v-text-field
          v-model="password"
          label="Senha"
          type="password"
        ></v-text-field>

        <v-select
          v-model="selectedProfile"
          label="Nome"
          :items="profileList"
          item-title="title"
          item-value="value"
        ></v-select>
      </v-card-text>

      <v-card-actions>
        <v-btn @click="newUser">
          Criar Usuário
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { categoryStore } from '@/store/category';

const { createUser } = categoryStore();

const name = ref('')
const email = ref('')
const password = ref('')
const selectedProfile = ref('')
const username = ref('')

const profileList = computed(() => {
  return [
    {
      title: 'Admin',
      value: 0
    },
    {
      title: 'Básico',
      value: 1
    },
  ]
})

const goBack = () => {
  window.history.go(-1)
}

const newUser = () => {
  const user = {
    name: name.value,
    email: email.value,
    password: password.value,
    profile: selectedProfile.value,
    username: username.value
  }
  createUser(user)
  goBack()
}
</script>

<style lang="scss">
.new-user {
  .form-card {
    margin: auto;
    width: 500px;
    max-width: 100%;
  }
}
</style>