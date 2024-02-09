<template>
    <div>
      <h1>Profil Utilisateur</h1>
      <div v-if="loading">Chargement...</div>
      <div v-else>
        <div v-if="error" class="error">{{ error }}</div>
        <div v-else>
          <div>Username: {{ username }}</div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  
  const username = ref('');
  const loading = ref(true);
  const error = ref('');
  
  onMounted(async () => {
    const token = localStorage.getItem('token');
  
    if (!token) {
      error.value = 'Token manquant';
      loading.value = false;
      return;
    }
  
    try {
      const response = await axios.get('http://localhost:3000/api/profile', {
        headers: {
          Authorization: token,
        },
      });
      username.value = response.data.username;
    } catch (err) {
      error.value = 'Erreur lors de la récupération du profil';
    } finally {
      loading.value = false;
    }
  });
  </script>
  
  <style scoped>
  .error {
    color: red;
  }
  </style>
  