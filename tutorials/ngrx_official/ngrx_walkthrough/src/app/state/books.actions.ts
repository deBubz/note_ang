import { createActionGroup, props } from '@ngrx/store';
import { Book } from '../book-list/books.model'

export const BooksActions = createActionGroup({
  source: 'Book',
  events: {
    'add book': props<{ bookId: string }>(),
    'remove book': props<{ bookId: string }>(),
  },
});

export const BooksApiActions = createActionGroup({
  source: 'Books API',
  events: {
    'retrieved book list': props<{ books: ReadonlyArray<Book> }>(),
  },
});
