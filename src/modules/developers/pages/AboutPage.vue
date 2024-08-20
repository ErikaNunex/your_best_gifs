<template>
  <div class="bg-white about-page p-4 flex flex-col md:flex-row my-12">
    <div class="info-section bg-blue-100 p-4 rounded-lg flex-none md:w-1/3">
      <q-avatar size="150px" class="mx-auto mb-4">
        <img :src="developer.img" alt="Avatar" />
      </q-avatar>
      <h2 class="text-xl font-bold text-center mb-2">{{ developer.stack }}</h2>
      <div class="flex justify-center space-x-4">
        <a
          v-if="developer.linkedin"
          :href="developer.linkedin"
          target="_blank"
          class="text-blue-600 underline"
        >
          LinkedIn
        </a>
        <span>|</span>
        <a
          v-if="developer.gitHub"
          :href="developer.gitHub"
          target="_blank"
          class="text-blue-600 underline"
        >
          GitHub
        </a>
      </div>
    </div>
    <div class="description-section flex-1 md:ml-4">
      <h1 class="text-2xl font-bold mb-4">Sobre {{ developer.name }}</h1>
      <p class="mb-4">{{ developer.description }}</p>
      <h2 class="text-xl font-semibold mb-2">Objetivo</h2>
      <p>{{ purposeTest }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useDevelopersStore } from '../stores';

const developersStore = useDevelopersStore();
const developer = computed(() => developersStore.developer);
const purposeTest = computed(() => developersStore.purposeTest);
</script>

<style scoped>
.about-page {
  max-width: 1200px;
  margin: 0 auto;
}

.info-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.description-section {
  display: flex;
  flex-direction: column;
}
</style>
