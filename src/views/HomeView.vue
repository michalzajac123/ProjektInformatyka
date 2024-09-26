<template>
  <div class="home">
    <Hero></Hero>
    <div class="home-choose-text">
      <h2 class="home-choose-title">WYBIERZ JĘZYK</h2>
      <div class="line"></div>
    </div>
    <div class="home-choose-language">
      <RouterLink to="/cpp">
        <ChooseLanguage>
          <img src="../assets/C++_logo.png" alt="c++" />
        </ChooseLanguage>
      </RouterLink>
      <RouterLink to="/js">
        <ChooseLanguage>
          <img src="../assets/JavaScript-logo.png" alt="js" />
        </ChooseLanguage>
      </RouterLink>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Hero from "@/components/Hero.vue";
import ChooseLanguage from "@/components/ChooseLanguage.vue";
</script>
<style>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.home-choose-language {
  display: flex;
  justify-content: center;
  width: 100%;
}
.home-choose-text {
  width: 20%;
}
.line {
  width: 100%;
  height: 2px;
  background-color: #2c3e50;
}
</style>
