<template>
    <div>
      <h2>Nouveau Projet</h2>
      <form @submit.prevent="createProject">
        <div>
          <label for="projectName">Nom du Projet:</label>
          <input type="text" id="projectName" v-model="projectName" required>
        </div>
        <div>
          <label for="projectDescription">Description du Projet:</label>
          <textarea id="projectDescription" v-model="projectDescription" required></textarea>
        </div>
        <button type="submit">Créer Projet</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const projectName = ref('');
  const projectDescription = ref('');
  
  const createProject = async () => {
    try {
      const response = await fetch('/api/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          projectName: projectName.value,
          projectDescription: projectDescription.value
        })
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data); // Afficher la réponse (optionnel)
        // Réinitialiser les champs du formulaire après la création du projet
        projectName.value = '';
        projectDescription.value = '';
      } else {
        console.error('Erreur lors de la création du projet:', response.statusText);
      }
    } catch (error) {
      console.error('Erreur:', error);
    }
  };
  </script>
  
  <style scoped>



  </style>
  