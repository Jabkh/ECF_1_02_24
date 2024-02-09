<template>
    <div>
      <h1>Connexion</h1>
      <form @submit.prevent="login">
        <label for="username">Nom d'utilisateur:</label>
        <input type="text" id="username" v-model="username" required />
  
        <label for="password">Mot de passe:</label>
        <input type="password" id="password" v-model="password" required />
  
        <button type="submit">Se connecter</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import axios from 'axios';
  
  const username = ref('');
  const password = ref('');
  
  const login = async () => {
    try {
      const response = await axios.post('http://localhost:3001/api/login', { username: username.value, password: password.value });
      // Gérer la réponse du serveur, par exemple, en stockant le token JWT côté client
    } catch (error) {
      console.error('Erreur lors de la connexion :', error);
      // Gérer les erreurs, par exemple, afficher un message d'erreur à l'utilisateur
    }
  };
  </script>
  
  <style scoped>
  /* Ajoutez des styles spécifiques au composant si nécessaire */
  </style>
  