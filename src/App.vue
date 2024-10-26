<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
import AboutMe from "./views/AboutMe.vue";
import Stack from "./views/Stack.vue";

const handleSectionClick = (section: string) => {
  console.log(section);
};
</script>

<template>
  <NavBar
    :title="'Portfolio'"
    :sections="['About', 'Techs', 'Projects', 'Contact']"
    @onSectionClick="handleSectionClick"
  />
  <AboutMe />
  <Stack />
</template>

<style scoped></style>
