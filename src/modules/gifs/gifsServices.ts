import { GifsRepository, gifsRepository } from './gifsReository';
import { useGifsStore } from './stores';

export class GifsService {
  private gifsRepository: GifsRepository;

  constructor(gifsRepository: GifsRepository) {
    this.gifsRepository = gifsRepository;
  }

  async fetchTrendingGifs(): Promise<void> {
    const gifsStore = useGifsStore();

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
}

export const gifsService: GifsService = new GifsService(gifsRepository);
