<script setup lang="ts">
import NavBar from "./components/NavBar.vue";

const handleSectionClick = (section: string) => {
  console.log(section);
};
</script>

<template>
  <NavBar
    :title="'Portfolio'"
    :sections="['Home', 'About', 'Projects', 'Contact']"
    @onSectionClick="handleSectionClick"
  />
</template>

<style scoped></style>
