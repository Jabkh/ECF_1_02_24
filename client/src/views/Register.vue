<template>
    <div>
      <h1>Inscription</h1>
      <form @submit.prevent="register">
        <label for="username">Nom d'utilisateur:</label>
        <input type="text" id="username" v-model="username" required />
  
        <label for="password">Mot de passe:</label>
        <input type="password" id="password" v-model="password" required />
  
        <label for="confirmPassword">Confirmer le mot de passe:</label>
        <input type="password" id="confirmPassword" v-model="confirmPassword" required />
  
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import axios from 'axios';
  
  const username = ref('');
  const password = ref('');
  const confirmPassword = ref('');
  
  const register = async () => {
    try {
      const response = await axios.post('http://localhost:3001/api/register', { username: username.value, password: password.value });
      // Gérer la réponse du serveur, par exemple, rediriger vers la page de connexion
    } catch (error) {
      console.error('Erreur lors de l\'inscription :', error);
      // Gérer les erreurs, par exemple, afficher un message d'erreur à l'utilisateur
    }
  };
  </script>
  
  <style scoped>
  /* Ajoutez des styles spécifiques au composant si nécessaire */
  </style>
  