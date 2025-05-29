import { useQuery } from '@tanstack/react-query';
import { searchBooks, type Target } from '@api/bookApi';

export function useBookSearch(query: string, page: number, target?: Target) {
  return useQuery({
    queryKey: ['books', query, page, target],
    queryFn: () => searchBooks(query, page, target),
    enabled: !!query,
    staleTime: 1000 * 60 * 5, // 5분 캐싱
  });
}
