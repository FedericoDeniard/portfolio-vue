<script setup lang="ts">
interface Tech {
  name: string;
  image: string;
}

const props = defineProps<{ tech: Tech }>();
</script>

<template>
  <div class="card" :id="tech.name" style="width: 8rem">
    <img :src="props.tech.image" class="card-img-top p-2" :alt="tech.name" />
    <div class="card-body">
      <p class="card-text text-center">
        {{ props.tech.name }}
      </p>
    </div>
  </div>
</template>
