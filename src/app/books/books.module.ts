import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksRoutingModule } from './books-routing.module';
import { BooksListComponent } from './books-list/books-list.component';
import { StoreModule } from '@ngrx/store';
import { booksReducer } from './books.reducer';
import { BooksService } from './books.service';


@NgModule({
  declarations: [
    BooksListComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    StoreModule.forFeature('books', booksReducer)
  ],
  providers: [
    BooksService
  ]
})
export class BooksModule { }
