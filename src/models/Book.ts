import type { KakaoBookDocument } from 'types/api/book';

/**
 * Book model
 */
export interface Book {
  isbn: string;
  title: string;
  authors: string[];
  publisher: string;
  contents: string;
  url: string;
  price: number;
  salePrice: number;
  thumbnail: string;
  status: string;
}

export const convertToBookModel = (dto: KakaoBookDocument): Book => ({
  ...dto,
  salePrice: dto.sale_price ?? -1,
});
