<template>
  <div class="lng-wrapper">
    <div class="lng-photo">
      <slot></slot>
    </div>
    <div class="lng-text">Wybierz Kurs</div>
  </div>
</template>

<script lang="ts" setup></script>
<style>
.lng-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px;
  transition: 0.5s;
  text-decoration: none;
}
.lng-photo {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
}
.lng-text {
  font-size: 20px;
  font-weight: bold;
}
.lng-wrapper:hover {
  transform: scale(0.9);
}
</style>
