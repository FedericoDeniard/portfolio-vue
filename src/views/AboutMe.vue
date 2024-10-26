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
        src="../assets/yo.png"
        class="about-image img-fluid rounded"
        alt="..."
      />
    </div>
    <div class="container text-center w-50">
      <h1 class="">Federico Deniard</h1>
      <h4 class="">Web Developer</h4>
      <p class="mt-3">
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
  width: 18%;
}
</style>
