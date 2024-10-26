<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  sections: {
    type: Array as () => string[],
    default: () => [],
  },
});

const emit = defineEmits(["onSectionClick"]);
const handleClick = (section: string) => {
  emit("onSectionClick", section);
};
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">{{ title }}</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li
            class="nav-item"
            v-for="(section, index) in sections"
            :key="index"
          >
            <a
              class="nav-link active"
              aria-current="page"
              :href="`#${section}`"
              @click.prevent="handleClick(section)"
              >{{ section }}</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
