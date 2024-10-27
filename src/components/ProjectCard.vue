<script setup lang="ts">
import { ProjectType } from "../assets/projects/projects";

const props = defineProps<{ project: ProjectType }>();
</script>

<template>
  <div class="card border border-dark" style="width: 18rem">
    <div class="image-container">
      <img
        :src="props.project.image"
        class="card-img-top"
        :alt="props.project.name"
      />
    </div>
    <div class="card-body">
      <h5 class="card-title">{{ props.project.name }}</h5>
      <p class="card-text">
        {{ props.project.description }}
      </p>
    </div>
    <div class="card-body d-flex flex-column align-items-start">
      <a
        v-if="props.project.github"
        :href="props.project.github"
        class="card-link"
        >Github Link</a
      >
      <span v-else class="placeholder">‎ </span>
      <a
        v-if="props.project.deployed"
        :href="props.project.deployed"
        class="card-link m-0"
        >Deployed Link</a
      >
      <span v-else class="placeholder">‎ </span>
    </div>
  </div>
</template>

<style scoped>
.image-container {
  width: 100%;
  padding-top: 100%; /* Relación de aspecto 1:1 */
  position: relative;
  margin: 0 auto; /* Centrar si el contenedor es más ancho */
}

.image-container img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain; /* Hace que la imagen cubra el contenedor sin distorsión */
}
</style>
