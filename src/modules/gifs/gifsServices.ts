import { GifsRepository, gifsRepository } from './gifsReository';
import { useGifsStore } from './stores';
import { saveToLocalStorage, getFromLocalStorage } from 'src/boot/localStorage';

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
      const favorites = (getFromLocalStorage('favoriteGifs') as string[]) || [];

      if (favorites.includes(gifId)) {
        const updatedFavorites = favorites.filter((id) => id !== gifId);
        saveToLocalStorage('favoriteGifs', updatedFavorites);
        console.log(`GIF ${gifId} removed from favorites`);
      } else {
        favorites.push(gifId);
        saveToLocalStorage('favoriteGifs', favorites);
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
}

export const gifsService: GifsService = new GifsService(gifsRepository);
