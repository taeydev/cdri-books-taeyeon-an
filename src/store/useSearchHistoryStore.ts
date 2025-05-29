import { create } from 'zustand';

const SEARCH_HISTORY_KEY = 'searchHistory';

interface SearchHistoryStore {
  history: string[];
  addHistory: (term: string) => void;
  removeHistory: (term: string) => void;
}

const loadHistoryFromStorage = (): string[] => {
  const stored = localStorage.getItem(SEARCH_HISTORY_KEY);
  return stored ? JSON.parse(stored) : [];
};

/**
 * 검색어 히스토리 관리 스토어
 */
export const useSearchHistoryStore = create<SearchHistoryStore>((set, get) => ({
  history: loadHistoryFromStorage(),

  addHistory: (term) =>
    set((state) => {
      // 기존에 있으면 삭제 후 맨 앞에 추가
      const updatedSearchHistory = [
        term,
        ...state.history.filter((t) => t !== term).slice(0, 7),
      ];
      localStorage.setItem(
        SEARCH_HISTORY_KEY,
        JSON.stringify(updatedSearchHistory)
      );
      return { history: updatedSearchHistory };
    }),

  removeHistory: (term) =>
    set((state) => {
      const updatedSearchHistory = state.history.filter((t) => t !== term);
      localStorage.setItem(
        SEARCH_HISTORY_KEY,
        JSON.stringify(updatedSearchHistory)
      );
      return { history: updatedSearchHistory };
    }),
}));
