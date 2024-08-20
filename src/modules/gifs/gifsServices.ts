import { GifsRepository, gifsRepository } from './gifsReository';
import { useGifsStore } from './stores';
import { saveToLocalStorage, getFromLocalStorage } from 'src/boot/localStorage';
import { GifInterface } from '@/modules/gifs/interfaces/GifsInterface';
const gifsStore = useGifsStore();

export class GifsService {
  private gifsRepository: GifsRepository;

  constructor(gifsRepository: GifsRepository) {
    this.gifsRepository = gifsRepository;
  }

  async fetchTrendingGifs(): Promise<void> {
    gifsStore.gifsTrendingLoading = true;

    try {
      const response = await this.gifsRepository.fetchTrendingGifs();
      gifsStore.trendingGifs = response.data;
      gifsStore.pagination = response.pagination;
      gifsStore.msgRequest = response.meta.msg || '';
    } catch (error) {
      gifsStore.msgRequest = 'Failed to load trending GIFs';
      console.error('Failed to load trending GIFs:', error);
    } finally {
      gifsStore.gifsTrendingLoading = false;
    }
  }

  saveFavorite(gifId: string): void {
    try {
      const favoritesString = getFromLocalStorage('favoriteGifs');
      const favorites = favoritesString ? favoritesString.split(',') : [];
      if (favorites.includes(gifId)) {
        console.log(`GIF ${gifId} já foi adiciondo aos favoritos`);
      } else {
        favorites.push(gifId);
        saveToLocalStorage('favoriteGifs', favorites.join(','));
        console.log(`GIF ${gifId} added to favorites`);
      }
    } catch (error) {
      console.error('Error saving GIF to favorites:', error);
    }
  }

  async searchGifs(search: string): Promise<void> {
    gifsStore.gifsTrendingLoading = true;
    gifsStore.trendingGifs = [];

    try {
      const response = await this.gifsRepository.searchTrendingGifs(search);
      gifsStore.trendingGifs = response.data;
      gifsStore.pagination = response.pagination;
      gifsStore.msgRequest = response.meta.msg || '';
    } catch (error) {
      gifsStore.msgRequest = 'Failed to search GIFs';
      console.error('Failed to search GIFs:', error);
    } finally {
      gifsStore.gifsTrendingLoading = false;
    }
  }
  async getFavoriteGifs(): Promise<void> {
    try {
      const favoriteIdsString = localStorage.getItem('favoriteGifs') || '';

      const response = await gifsRepository.findFavoriteGifs(favoriteIdsString);
      gifsStore.favorites = response.data;
      gifsStore.msgRequest = response.meta.msg || '';
    } catch (error) {
      console.error('Failed to find favorite GIFs:', error);
    }
  }

  async removeFavoriteGifs(gifId: string): Promise<void> {
    try {
      const favoritesString = getFromLocalStorage('favoriteGifs');
      const favorites = favoritesString ? favoritesString.split(',') : [];
      const updatedFavorites = favorites.filter((id) => id !== gifId);
      saveToLocalStorage('favoriteGifs', updatedFavorites.join(','));
      await this.getFavoriteGifs();
    } catch (error) {
      console.error('Error removing GIF from favorites:', error);
    }
  }
  async fetchCategories(): Promise<void> {
    gifsStore.categoriesLoading = true;
    try {
      const response = await this.gifsRepository.fetchCategories();
      gifsStore.categories = response.data;
      gifsStore.msgRequest = response.meta.msg || '';
    } catch (error) {
      gifsStore.msgRequest = 'Failed to load categories';
      console.error('Failed to load categories:', error);
    } finally {
      gifsStore.categoriesLoading = false;
    }
  }
  async fetchGifsByCategory(gifsCategory: GifInterface): Promise<void> {
    gifsStore.gifsCategoryLoading = true;
    gifsStore.gifsCategory = [];
    gifsStore.gifsCategory.push(gifsCategory);
    gifsStore.gifsCategoryLoading = false;
  }
}

export const gifsService: GifsService = new GifsService(gifsRepository);
