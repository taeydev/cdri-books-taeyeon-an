import { useQuery } from '@tanstack/react-query';
import { searchBooks, type Target } from '@api/bookApi';

export function useBookSearch(query: string, target?: Target) {
  return useQuery({
    queryKey: ['books', query, target],
    queryFn: () => searchBooks(query, target),
    enabled: !!query,
    staleTime: 1000 * 60 * 5, // 5분 캐싱
  });
}
