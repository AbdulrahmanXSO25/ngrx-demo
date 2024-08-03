import { createAction, props } from '@ngrx/store';
import { Book } from './models/book.model';

export const loadBooks = createAction('[Books] Load Books', props<{ books: Book[] }>());
export const setLoading = createAction('[Books] Set Loading', props<{ loading: boolean }>());
export const setError = createAction('[Books] Set Error', props<{ error: any }>());
