<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
import AboutMe from "./views/AboutMe.vue";
import Stack from "./views/Stack.vue";
import Projects from "./views/Projects.vue";

const handleSectionClick = (section: string) => {
  console.log(section);
};
</script>

<template>
  <NavBar
    :title="'Federico Deniard'"
    :sections="['About', 'Techs', 'Projects', 'Contact']"
    @onSectionClick="handleSectionClick"
  />
  <AboutMe />
  <Stack />
  <Projects />
</template>

<style scoped></style>
