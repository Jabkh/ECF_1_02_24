<template>
    <div>
      <div v-if="showRegisterForm">
        <RegisterForm />
        <button class="auth-toggle-btn" @click="toggleForm">Déjà un compte ? Se connecter</button>
      </div>
      <div v-else>
        <LoginForm />
        <button class="auth-toggle-btn" @click="toggleForm">Pas encore de compte ? S'inscrire</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import RegisterForm from './RegisterForm.vue';
  import LoginForm from './LoginForm.vue';
  
  const showRegisterForm = ref(true);
  
  const toggleForm = () => {
    showRegisterForm.value = !showRegisterForm.value;
  };
  </script>
  
  <style scoped>
  .auth-toggle-btn {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px; /* Espacement entre le formulaire et le bouton */
    transition: background-color 0.3s ease;
  }
  
  .auth-toggle-btn:hover {
    background-color: #0056b3;
  }
  </style>
  