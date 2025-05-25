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
  salePrice?: number;
  thumbnail: string;
  status: string;
}
