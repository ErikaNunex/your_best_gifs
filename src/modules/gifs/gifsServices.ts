import { GifsRepository, gifsRepository } from './gifsReository';
import { useGifsStore } from './stores';
import { saveToLocalStorage, getFromLocalStorage } from 'src/boot/localStorage';

export class GifsService {
  private gifsRepository: GifsRepository;

  constructor(gifsRepository: GifsRepository) {
    this.gifsRepository = gifsRepository;
  }

  async fetchTrendingGifs(): Promise<void> {
    const gifsStore = useGifsStore();

    gifsStore.gifsTrendingLoading = true;

    const response = await this.gifsRepository.fetchTrendingGifs();
    try {
      gifsStore.trendingGifs = response.data;
      gifsStore.pagination = response.pagination;
      gifsStore.msgRequest = response.meta.msg || '';
    } catch (error) {
      gifsStore.msgRequest = response.meta.msg || '';
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
        console.log(`GIF ${gifId} removido dos favoritos`);
      } else {
        favorites.push(gifId);
        saveToLocalStorage('favoriteGifs', favorites);
        console.log(`GIF ${gifId} adicionado aos favoritos`);
      }
    } catch (error) {
      console.error('Failed to save favorite GIFs:', error);
    }
  }
}

export const gifsService: GifsService = new GifsService(gifsRepository);
