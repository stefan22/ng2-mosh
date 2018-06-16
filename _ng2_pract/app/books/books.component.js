System.register(['@angular/core', './books.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, books_service_1;
    var BooksComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (books_service_1_1) {
                books_service_1 = books_service_1_1;
            }],
        execute: function() {
            BooksComponent = class BooksComponent {
                constructor(booksService) {
                    this.title = "The title of the Yello Books page";
                    this.books = [];
                    this.books = booksService.getBooks();
                }
            };
            BooksComponent = __decorate([
                core_1.Component({
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
                    providers: [books_service_1.BooksService],
                    styles: [
                        "li {display:inline-block; width:90px; cursor:pointer;}",
                        "li:hover {color:darkred;}",
                        "ul {margin:1em 0;}",
                        "h2 {padding-top:1em; margin:0 0 1em 0;}"
                    ]
                }), 
                __metadata('design:paramtypes', [books_service_1.BooksService])
            ], BooksComponent);
            exports_1("BooksComponent", BooksComponent); //BooksComponent class
        }
    }
});
//# sourceMappingURL=books.component.js.map