<script setup lang="ts">
const props = defineProps({});
</script>

<template>
  <div
    id="About"
    class="container-fluid section d-flex flex-column gap-3 justify-content-center"
  >
    <div class="text-center">
      <img
        src="../assets/yo.webp"
        class="about-image img-fluid rounded"
        alt="Federico Deniard"
      />
    </div>
    <div class="container text-center">
      <h1 class="text-nowrap">Federico Deniard</h1>
      <h4 class="text-nowrap">Web Developer</h4>
      <p class="mt-3 w-50 mx-auto">
        Fullstack developer experienced in technologies like Vue, React,
        JavaScript, and Python. Passionate about building robust and efficient
        applications, with a focus on every detail from layout to implementing
        complex functions.
      </p>
    </div>
  </div>
</template>

<style scoped>
.about-image {
  max-height: 40vh;
  max-width: 60%;
}
</style>
