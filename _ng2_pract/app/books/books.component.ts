import { Component } from '@angular/core';
import { BooksService } from './books.service';


@Component({
  selector: 'books',
  template: `
    <h2>My Yello Books</h2>
    {{ title }}
    <div class="input-section form-group ">
      <input class="input" 
      type="text" autoGrow placeholder="enter book name" />
    </div>
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
    "h2 {padding-top:1em; margin:0 0 1em 0;}",
    "input {display:block; padding:7px 12px; width:230px;}",
    ".input-section input { margin-top:1em; transition:width 1s ease-in-out;}",
    ".input-section input:focus {outline:none; }",
    ".isRoling {border:1px solid red;}"
    

  ]

  
})

export class BooksComponent {
  title = "The title of the Yello Books page";

  books = [];

  constructor(booksService:BooksService) {
    this.books = booksService.getBooks();

  }

  
}//BooksComponent class