import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Book } from '../models/book.model';
import { loadBooks, setError, setLoading } from '../books.actions';
import { selectAllBooks, selectBooksError, selectBooksLoading } from '../books.selectors';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrl: './books-list.component.css'
})
export class BooksListComponent implements OnInit {
  books$: Observable<Book[]>;
  loading$: Observable<boolean>;
  error$: Observable<any>;

  constructor(private store: Store, private booksService: BooksService) {
    this.books$ = this.store.select(selectAllBooks);
    this.loading$ = this.store.select(selectBooksLoading);
    this.error$ = this.store.select(selectBooksError);
  }

  ngOnInit(): void {
    this.store.dispatch(setLoading({ loading: true }));
    this.booksService.getBooks().subscribe({
      next: books => this.store.dispatch(loadBooks({ books })),
      error: error => this.store.dispatch(setError({ error }))
    });
  }
}
