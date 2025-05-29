import type { Book } from '@models/Book';
import BookAccordionItem from './BookAccordionItem';
import { useWishlistStore } from '@store/useWishlistStore';

interface BookAccordionListProps {
  books: Book[];
}

/**
 * 도서 아코디언 리스트 컴포넌트
 */
const BookAccordionList = ({ books }: BookAccordionListProps) => {
  const { isWished, addWishedBook, removeWishedBook } = useWishlistStore();
  const toggleWish = (book: Book) => {
    if (isWished(book.isbn)) {
      removeWishedBook(book.isbn);
    } else {
      addWishedBook(book);
    }
  };

  return (
    <>
      {books.map((item) => (
        <BookAccordionItem
          key={item.isbn}
          book={item}
          onClickWish={() => toggleWish(item)}
          isWished={isWished(item.isbn)}
        />
      ))}
    </>
  );
};

export default BookAccordionList;
