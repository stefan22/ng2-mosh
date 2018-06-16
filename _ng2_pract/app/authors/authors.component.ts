import { Component } from '@angular/core';
import { AuthorsService } from './authors.service';


@Component({
  selector: 'authors',
  template: `
    <h2>My Yello Authors</h2>
    {{ title }}
    <ul>
      <li *ngFor="let author of authors">
        {{ author }}
      </li>
    </ul>
    `,

  providers: [AuthorsService],


  styles: [
    "li {display:inline-block; width:90px; cursor:pointer;}",
    "li:hover {color:darkred;}",
    "ul {margin:1em 0;}",
    "h2 {padding-top:1em; margin:0 0 1em 0;}"

  ]


})


export class AuthorsComponent {
  title = "The title of the Yello Authors page";
  authors = [];

  constructor(authorsService:AuthorsService) {
    this.authors = authorsService.getAuthors();
  }

}
