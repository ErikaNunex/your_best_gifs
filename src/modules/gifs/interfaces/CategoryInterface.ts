import { GifInterface } from '../interfaces/GifsInterface';
export interface SubcategoryInterface {
  name: string;
  name_encoded: string;
}

export interface CategoryInterface {
  name: string;
  name_encoded: string;
  subcategories: SubcategoryInterface[];
  gif: GifInterface;
}
