<template>
  <div class="bg-white p-4">
    <div class="grid grid-cols-2 gap-4 md:grid-cols-4 flex items-baseline">
      <GifCard
        v-for="gif in favorites"
        :key="gif.id"
        :gifUrl="gif.images.fixed_height_small.url"
        :isFavoritePage="true"
        @button-click="removeFavorite(gif.id)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useGifsStore } from '../stores';
import GifCard from '../components/GifCard.vue';
import { gifsService } from '../gifsServices';

const gifsStore = useGifsStore();
const favorites = computed(() => gifsStore.favorites);

onMounted(async () => {
  await gifsService.getFavoriteGifs();
});

function removeFavorite(gifId: string) {
  gifsService.removeFavoriteGifs(gifId);
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
