import React, { useCallback } from 'react';
import type { Book } from '@models/Book';
import BookAccordionItem from '@components/book/BookAccordionItem';
import { useWishlistStore } from '@store/useWishlistStore';
import { ListWrapper } from './BookAccordionList.styles';

interface BookAccordionListProps {
  books: Book[];
}

/**
 * 도서 아코디언 리스트 컴포넌트
 */
const BookAccordionList = ({ books }: BookAccordionListProps) => {
  const isWished = useWishlistStore((state) => state.isWished);
  const addWishedBook = useWishlistStore((state) => state.addWishedBook);
  const removeWishedBook = useWishlistStore((state) => state.removeWishedBook);

  const toggleWish = useCallback(
    (book: Book) => {
      if (isWished(book.isbn)) {
        removeWishedBook(book.isbn);
      } else {
        addWishedBook(book);
      }
    },
    [isWished, addWishedBook, removeWishedBook]
  );

  return (
    <ListWrapper>
      {books.map((item, idx) => (
        <BookAccordionItem
          key={`${idx}_${item.isbn}`}
          book={item}
          onClickWish={toggleWish}
        />
      ))}
    </ListWrapper>
  );
};

export default React.memo(BookAccordionList);
