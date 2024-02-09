<!-- Login.vue -->

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
    const response = await axios.post('http://localhost:3000/api/login', { username: username.value, password: password.value });
    // Gérer la réponse du serveur, par exemple, en stockant le token JWT côté client
    console.log('utilisateur connecté');
  } catch (error) {
    console.error('Erreur lors de la connexion :', error);
    // Gérer les erreurs, par exemple, afficher un message d'erreur à l'utilisateur
  }
};
</script>

<style scoped>
/* login.css */

form {
  max-width: 400px;
  margin: 0 auto;
}

h1 {
  text-align: center;
}

label {
  display: block;
  margin-bottom: 10px;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button[type="submit"] {
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: #0056b3;
}

.error-message {
  color: #ff0000;
  margin-top: 10px;
}

</style>
