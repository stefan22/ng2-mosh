import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { AuthorsComponent } from './authors/authors.component';
import { AutogrowDirective } from './autogrow.directive';


@NgModule({
  imports: [
    BrowserModule, FormsModule, HttpModule, JsonpModule
  ],
  declarations: [
    AppComponent, BooksComponent, AuthorsComponent, AutogrowDirective
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }