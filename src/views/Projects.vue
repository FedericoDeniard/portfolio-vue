<script setup lang="ts">
import { projects } from "../assets/projects/projects";
import ProjectCard from "../components/ProjectCard.vue";
</script>

<template>
  <div
    id="Projects"
    class="container-fluid section d-flex flex-column gap-3 pt-5"
  >
    <h1 class="mt-5 text-center">Projects</h1>
    <div
      class="d-flex flex-wrap gap-3 justify-content-center flex-grow-1 p-3 align-items-center"
    >
      <ProjectCard v-for="project in projects" :project="project" />
    </div>
  </div>
</template>
