import { UserInterface } from '@/modules/users/interfaces/UserInterface';
import { ImagesInterface } from './ImageInterface';

export interface GifInterface {
  type: string;
  id: string;
  slug: string;
  url: string;
  bitly_url: string;
  embed_url: string;
  username: string;
  source: string;
  rating: string;
  content_url: string | null;
  user: UserInterface | null;
  source_tld: string;
  source_post_url: string;
  update_datetime: string;
  create_datetime: string;
  import_datetime: string;
  trending_datetime: string | null;
  images: ImagesInterface;
  title: string;
  alt_text: string;
}
