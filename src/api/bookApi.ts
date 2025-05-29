import { convertToBookModel, type Book } from '@models/Book';
import type { KakaoBookSearchResponse } from 'types/api/book';

const BASE_URL = 'https://dapi.kakao.com/v3/search/book';

const REST_API_KEY = import.meta.env.VITE_REST_API_KEY;

export type Target = 'title' | 'authors' | 'publisher';

export interface SearchBooksResult {
  totalCount: number;
  books: Book[];
}

export const searchBooks = async (query: string, target?: Target) => {
  const url = new URL(BASE_URL);
  url.searchParams.append('query', query);
  if (target) url.searchParams.append('target', target);

  const res = await fetch(url.toString(), {
    method: 'GET',
    headers: {
      Authorization: `KakaoAK ${REST_API_KEY}`,
    },
  });

  const data: KakaoBookSearchResponse = await res.json();
  const totalCount = data.meta.total_count;

  return { totalCount, books: data.documents.map(convertToBookModel) };
};
