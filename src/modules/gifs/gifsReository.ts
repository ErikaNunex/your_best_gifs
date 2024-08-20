import { get } from 'src/shared/BaseRepository';
import { GifInterface } from '@/modules/gifs/interfaces/GifsInterface';
import { PaginationInterface } from '@/shared/interfaces/PaginationInterface';
import { ResponseInterface } from '@/shared/interfaces/ResponseInterface';
import { CategoryInterface } from './interfaces/CategoryInterface';
interface GifsTrendingResponseInterface {
  data: GifInterface[];
  pagination: PaginationInterface;
  meta: ResponseInterface;
}
interface CategoriesResponseInterface {
  data: CategoryInterface[];
  pagination: PaginationInterface;
  meta: ResponseInterface;
}

export class GifsRepository {
  async fetchTrendingGifs(): Promise<GifsTrendingResponseInterface> {
    const response = await get<GifsTrendingResponseInterface>('/gifs/trending');
    return response;
  }
  async searchTrendingGifs(
    query: string
  ): Promise<GifsTrendingResponseInterface> {
    const params = { q: query };
    const response = await get<GifsTrendingResponseInterface>(
      '/gifs/search',
      params
    );
    return response;
  }
  async findFavoriteGifs(
    gifsid: string
  ): Promise<GifsTrendingResponseInterface> {
    const params = { ids: gifsid };
    const response = await get<GifsTrendingResponseInterface>('/gifs', params);
    return response;
  }
  async fetchCategories(): Promise<CategoriesResponseInterface> {
    const response = await get<CategoriesResponseInterface>('/gifs/categories');
    return response;
  }
}

export const gifsRepository = new GifsRepository();
