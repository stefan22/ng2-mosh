import { Component } from '@angular/core';
import { BooksService } from './books.service';

@Component({
  selector: 'books',
  template: `
    <h2>My Yello Books</h2>
    {{ title }}
    <ul>
      <li *ngFor="let book of books">
        {{ book }}
      </li>
    </ul>
  `,

  providers: [BooksService],

  styles: [
    "li {display:inline-block; width:90px; cursor:pointer;}",
    "li:hover {color:darkred;}",
    "ul {margin:1em 0;}",
    "h2 {padding-top:1em; margin:0 0 1em 0;}"

  ]

  
})

export class BooksComponent {
  title = "The title of the Yello Books page";
  books = [];

  constructor(booksService:BooksService) {
    this.books = booksService.getBooks();

  }

  
}//BooksComponent class