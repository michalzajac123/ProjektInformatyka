<template>
  <div class="navbar">
    <div class="navbar-logo">
      <img src="../assets/C++_logo.png" alt="C++" />
      <img src="../assets/JavaScript-logo.png" alt="JS" />
    </div>
    <div class="links">
      <RouterLink class="navbar-link" to="/">Strona główna</RouterLink>
      <RouterLink class="navbar-link" to="/js">JS</RouterLink>
      <RouterLink class="navbar-link" to="/cpp">C++</RouterLink>
    </div>
  </div>
</template>
<script setup lang="ts">
import routerLink from "@/router";
import { RouterLink } from "vue-router";
</script>
<style>
.navbar {
  background-color: rgb(255, 217, 0);
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.navbar-link {
  margin: 0 20px;
  font-size: 20px;
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  transition: 0.2s ease-in;
}
.navbar-link:hover {
  color: white;
}
.navbar-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 100px;
}
.navbar-logo > img {
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin: 10px;
}
</style>
