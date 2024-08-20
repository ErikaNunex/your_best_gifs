<template>
  <div class="p-4">
    <div class="mb-4">
      <q-input
        v-model="search"
        label="Search GIFs"
        outlined
        debounce="300"
        @keyup.enter="searchGifs"
      >
        <template v-slot:append>
          <q-icon name="search" @click="searchGifs" class="cursor-pointer" />
        </template>
      </q-input>
      <q-btn
        v-if="search.trim() !== ''"
        color="red"
        text-color="white"
        flat
        label="Limpar Filtro"
        class="mt-2 bg-red text-white"
        @click="clearFilter"
      />
    </div>

    <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
      <GifCard
        v-for="gif in trendingGifs"
        :key="gif.id"
        :gifUrl="gif.images.fixed_height_small.url"
        :isFavoritePage="false"
        @button-click="saveFavorite(gif.id)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useGifsStore } from '../stores';
import GifCard from '../components/GifCard.vue';
import { gifsService } from '../gifsServices';

const gifsStore = useGifsStore();
const trendingGifs = computed(() => gifsStore.trendingGifs);
const search = ref('');

onMounted(async () => {
  await gifsService.fetchTrendingGifs();
});

async function searchGifs() {
  if (search.value.trim()) {
    await gifsService.searchGifs(search.value.trim());
  }
}

async function clearFilter() {
  search.value = '';
  await gifsService.fetchTrendingGifs();
}

async function saveFavorite(gifId: string) {
  await gifsService.saveFavorite(gifId);
}
</script>

<style scoped>
.grid {
  display: grid;
  gap: 16px;
}
@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
@media (max-width: 767px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
