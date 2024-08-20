<template>
  <div class="bg-white categories-page p-4">
    <h1 class="text-2xl font-bold mb-4">Categorias</h1>
    <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
      <div
        v-for="category in categories"
        :key="category.name_encoded"
        @click="selectCategory(category)"
        :class="{
          'category-item': true,
          'bg-blue-500 text-white': categoryName === category.name,
          'hover:bg-gray-200': categoryName !== category.name,
        }"
        class="p-4 cursor-pointer transition rounded-lg"
      >
        <h2 class="text-center text-lg font-medium">{{ category.name }}</h2>
      </div>
    </div>

    <div v-if="selectedCategoryGifs.length" class="category-gifs mt-8">
      <h2 class="text-xl font-semibold mb-4">GIFs de {{ categoryName }}</h2>
      <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
        <GifCard
          v-for="gif in selectedCategoryGifs"
          :key="gif.id"
          :gifUrl="gif.images.fixed_height_small.url"
        />
      </div>
    </div>
    <div v-if="gifsLoading" class="loading mt-8 text-center">
      <p>Carregando GIFs...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useGifsStore } from '../stores';
import { gifsService } from '../gifsServices';
import GifCard from '../components/GifCard.vue';
import { CategoryInterface } from '../interfaces/CategoryInterface';

const gifsStore = useGifsStore();
const categories = computed(() => gifsStore.categories);
const selectedCategoryGifs = computed(() => gifsStore.gifsCategory);
const categoryName = computed(() => gifsStore.categoryName);
const gifsLoading = computed(() => gifsStore.gifsCategoryLoading);

onMounted(async () => {
  await gifsService.fetchCategories();
});

function selectCategory(category: CategoryInterface) {
  gifsStore.categoryName = category.name;
  gifsService.fetchGifsByCategory(category.gif);
}
</script>

<style scoped>
.categories-page {
  max-width: 1200px;
  margin: 0 auto;
}

.category-item img {
  max-height: 100px;
}

.category-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.category-gifs {
  margin-top: 2rem;
}
</style>
