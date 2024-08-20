import { defineStore } from 'pinia';
import { ref } from 'vue';
import { GifInterface } from '../interfaces/GifsInterface';
import { CategoryInterface } from '../interfaces/CategoryInterface';
import { PaginationInterface } from '@/shared/interfaces/PaginationInterface';
export const useGifsStore = defineStore('gifs', () => {
  const trendingGifs = ref<Array<GifInterface>>([]);
  const favorites = ref<Array<GifInterface>>([]);
  const categories = ref<Array<CategoryInterface>>([]);
  const gifsCategory = ref<Array<GifInterface>>([]);
  const categoryName = ref<string>('');
  const categoriesLoading = ref<boolean>(false);
  const gifsTrendingLoading = ref<boolean>(false);
  const msgRequest = ref<string>('');
  const gifsCategoryLoading = ref<boolean>(false);
  const pagination = ref<PaginationInterface>({
    offset: 0,
    total_count: 0,
    count: 0,
  });
  return {
    trendingGifs,
    favorites,
    categories,
    gifsTrendingLoading,
    msgRequest,
    pagination,
    gifsCategory,
    categoriesLoading,
    categoryName,
    gifsCategoryLoading,
  };
});
