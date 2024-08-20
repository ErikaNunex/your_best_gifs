import { defineStore } from 'pinia';
import { ref } from 'vue';
import { GifInterface } from '../interfaces/GifsInterface';
import { CategoryInterface } from '../interfaces/CategoryInterface';
import { PaginationInterface } from '@/shared/interfaces/PaginationInterface';
import { GifsTrendingRequestInterface } from '../interfaces/GifsTrendingRequestInterface';
export const useGifsStore = defineStore('gifs', () => {
  const trendingGifs = ref<Array<GifInterface>>([]);
  const searchResults = ref<Array<GifInterface>>([]);
  const favorites = ref<Array<GifInterface>>([]);
  const categories = ref<Array<CategoryInterface>>([]);
  const gifsTrendingLoading = ref<boolean>(false);
  const msgRequest = ref<string>('');
  const gifsTrendingRequest = ref<GifsTrendingRequestInterface | null>(null);
  const pagination = ref<PaginationInterface>({
    offset: 0,
    total_count: 0,
    count: 0,
  });
  return {
    trendingGifs,
    searchResults,
    favorites,
    categories,
    gifsTrendingLoading,
    msgRequest,
    pagination,
    gifsTrendingRequest,
  };
});
