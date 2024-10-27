<script setup lang="ts">
import TechCard from "../components/TechCard.vue";

import { frameworks, languages } from "../assets/techs/techs.ts";
</script>

<template>
  <div
    class="container-fluid section d-flex flex-column p-5 gap-3 bg-secondary mt-5 text-center"
    id="Techs"
  >
    <h1 class="mt-5">Languages</h1>
    <div
      class="d-flex flex-wrap gap-3 justify-content-center flex-grow-1 p-3 align-items-center"
    >
      <TechCard v-for="tech in languages" :tech="tech" />
    </div>
    <h1 class="mt-5">Frameworks</h1>
    <div
      class="d-flex flex-wrap gap-3 justify-content-center flex-grow-1 p-3 align-items-center"
    >
      <TechCard v-for="tech in frameworks" :tech="tech" />
    </div>
  </div>
</template>

<style scoped></style>
