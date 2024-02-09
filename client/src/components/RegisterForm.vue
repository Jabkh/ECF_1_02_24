<!-- Register.vue -->

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
    const response = await axios.post('http://localhost:3000/api/register', { username: username.value, password: password.value });
    // Gérer la réponse du serveur, par exemple, rediriger vers la page de connexion
    console.log('utilisateur ajouté avec succès');
  } catch (error) {
    console.error('Erreur lors de l\'inscription :', error);
    // Gérer les erreurs, par exemple, afficher un message d'erreur à l'utilisateur
  }
};
</script>

<style scoped>
/* register.css */

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
