<script setup lang="ts">
import { onMounted } from "vue";
const props = defineProps({
  tech: {
    type: Object,
    required: true,
    validator: (value) => {
      return "name" in value && "image" in value;
    },
  },
});
</script>

<template>
  <div class="card" :id="tech.name" style="width: 8rem">
    <img :src="tech.image" class="card-img-top p-2" :alt="tech.name" />
    <div class="card-body">
      <p class="card-text text-center">
        {{ tech.name }}
      </p>
    </div>
  </div>
</template>
