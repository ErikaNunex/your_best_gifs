import { get } from 'src/shared/BaseRepository';
import { GifInterface } from '@/modules/gifs/interfaces/GifsInterface';
// import { GifsTrendingRequestInterface } from './interfaces/GifsTrendingRequestInterface';
import { PaginationInterface } from '@/shared/interfaces/PaginationInterface';
import { ResponseInterface } from '@/shared/interfaces/ResponseInterface';
interface GifsTrendingResponseInterface {
  data: GifInterface[];
  pagination: PaginationInterface;
  meta: ResponseInterface;
}

export class GifsRepository {
  async fetchTrendingGifs(): Promise<GifsTrendingResponseInterface> {
    const response = await get<GifsTrendingResponseInterface>('/gifs/trending');
    return response;
  }
}
