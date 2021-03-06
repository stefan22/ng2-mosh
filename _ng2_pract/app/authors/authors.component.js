System.register(['@angular/core', './authors.service'], function(exports_1, context_1) {
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
    var core_1, authors_service_1;
    var AuthorsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (authors_service_1_1) {
                authors_service_1 = authors_service_1_1;
            }],
        execute: function() {
            AuthorsComponent = class AuthorsComponent {
                constructor(authorsService) {
                    this.title = "The title of the Yello Authors page";
                    this.authors = [];
                    this.authors = authorsService.getAuthors();
                }
            };
            AuthorsComponent = __decorate([
                core_1.Component({
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
                    providers: [authors_service_1.AuthorsService],
                    styles: [
                        "li {display:inline-block; width:90px; cursor:pointer;}",
                        "li:hover {color:darkred;}",
                        "ul {margin:1em 0;}",
                        "h2 {padding-top:1em; margin:0 0 1em 0;}"
                    ]
                }), 
                __metadata('design:paramtypes', [authors_service_1.AuthorsService])
            ], AuthorsComponent);
            exports_1("AuthorsComponent", AuthorsComponent);
        }
    }
});
//# sourceMappingURL=authors.component.js.map