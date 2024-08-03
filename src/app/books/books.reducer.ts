import { createReducer, on } from '@ngrx/store';
import { loadBooks, setLoading, setError } from './books.actions';
import { Book } from './models/book.model';

export interface BooksState {
  books: Book[];
  loading: boolean;
  error: any;
}

export const initialState: BooksState = {
  books: [],
  loading: false,
  error: null
};

export const booksReducer = createReducer(
  initialState,
  on(setLoading, (state, { loading }) => ({ ...state, loading })),
  on(loadBooks, (state, { books }) => ({ ...state, books, loading: false })),
  on(setError, (state, { error }) => ({ ...state, error, loading: false }))
);
