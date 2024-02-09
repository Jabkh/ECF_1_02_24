<template>
  <div id="app">
    <Navbar></Navbar>
    <!-- <Profile></Profile> -->
    <AddProject></AddProject>

    <!-- <LoginForm></LoginForm>
    <RegisterForm></RegisterForm> -->
  </div>
</template>

<script setup>
import LoginForm from '@/components/LoginForm.vue'
import RegisterForm from '@/components/RegisterForm.vue'
import Navbar from '@/components/Navbar.vue'
import Profile from '@/components/Profile.vue'
import AddProject from '@/components/AddProject.vue'
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
