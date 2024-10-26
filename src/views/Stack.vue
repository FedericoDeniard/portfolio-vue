<script setup lang="ts">
import TechCard from "../components/TechCard.vue";

import techs from "../assets/techs/techs.js";
</script>

<template>
  <div
    class="container-fluid section d-flex flex-column p-5 gap-3 bg-secondary mt-5"
    id="Techs"
  >
    <h1 class="mt-5">Stack</h1>
    <div
      class="d-flex flex-wrap gap-3 justify-content-center flex-grow-1 p-3 align-items-center"
    >
      <TechCard v-for="tech in techs" :tech="tech" />
    </div>
  </div>
</template>

<style scoped></style>
