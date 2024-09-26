<template>
  <Navbar></Navbar>
  <RouterView></RouterView>
  <Footer></Footer>
</template>
<script setup lang="ts">
import Navbar from "@/components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>
<style>
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
