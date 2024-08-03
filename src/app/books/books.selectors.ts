import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BooksState } from './books.reducer';

export const selectBooksState = createFeatureSelector<BooksState>('books');

export const selectAllBooks = createSelector(
  selectBooksState,
  (state: BooksState) => state.books
);

export const selectBooksLoading = createSelector(
  selectBooksState,
  (state: BooksState) => state.loading
);

export const selectBooksError = createSelector(
  selectBooksState,
  (state: BooksState) => state.error
);
