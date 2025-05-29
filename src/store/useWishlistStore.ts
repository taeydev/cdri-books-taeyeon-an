import type { Book } from '@models/Book';
import { create } from 'zustand';

const WISH_LIST_KEY = 'wishlist';

interface WishlistStore {
  wishlist: Book[];
  addWishedBook: (book: Book) => void;
  removeWishedBook: (isbn: string) => void;
  isWished: (isbn: string) => boolean;
}

const loadWishlistFromStorage = (): Book[] => {
  const stored = localStorage.getItem(WISH_LIST_KEY);
  return stored ? JSON.parse(stored) : [];
};

/**
 * 도서 찜 목록 관리 스토어
 */
export const useWishlistStore = create<WishlistStore>((set, get) => ({
  wishlist: loadWishlistFromStorage(),

  addWishedBook: (book: Book) =>
    set((state) => {
      const updatedWishlist = [...state.wishlist, book];
      localStorage.setItem(WISH_LIST_KEY, JSON.stringify(updatedWishlist));
      return { wishlist: updatedWishlist };
    }),

  removeWishedBook: (isbn: string) =>
    set((state) => {
      const updatedWishlist = state.wishlist.filter(
        (book) => book.isbn !== isbn
      );
      localStorage.setItem(WISH_LIST_KEY, JSON.stringify(updatedWishlist));
      return { wishlist: updatedWishlist };
    }),

  isWished: (id: string) => get().wishlist.some((book) => book.isbn === id),
}));
