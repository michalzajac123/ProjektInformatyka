<template>
  <div class="footer">
    <div class="authors">
      Michał Zając, Milan Sułek, Mikołaj Ziemiański, Julian Samek
    </div>
    <div class="footer-title">Kurs C++ i JS</div>
  </div>
</template>
<script lang="ts" setup></script>
<style>
.footer {
  background-color: rgb(255, 217, 0);
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  align-items: center;
  .footer-title {
    font-size: 20px;
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    transition: 0.2s ease-in;
  }
  .authors {
    margin: 0 20px;
    font-size: 20px;
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    transition: 0.2s ease-in;
  }
}
</style>
