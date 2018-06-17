System.register(['@angular/core', './http.service'], function(exports_1, context_1) {
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
    var core_1, http_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_service_1_1) {
                http_service_1 = http_service_1_1;
            }],
        execute: function() {
            AppComponent = class AppComponent {
                constructor(httpService) {
                    this.httpService = httpService;
                    this.isLoading = true;
                    this.dataLink = "dummy data";
                    this.isActive = false;
                } //constructor
                onClick(e) {
                    console.log(e);
                } //onClick method
                ngOnInit() {
                    this.httpService.getPosts()
                        .subscribe(posts => {
                        this.posts = posts;
                        this.isLoading = false;
                        console.log(posts);
                        console.log(posts[0]);
                        console.log(posts[0].Country_Desc);
                    });
                } //ngOnInit method
            };
            AppComponent = __decorate([
                core_1.Component({
                    selector: 'app',
                    template: `
      <h1>Yello Library</h1>
      <books></books>
      <authors></authors>

      <button class="btn btn-add" [class.active]="isActive"
      [style.color]="isActive ? 'green' : 'white'">Add</button>

      <button (click)="onClick($event)" class="btn btn-add"> Event </button>
      <section class="data">
      <p><a href="data.html">{{ dataLink }}</a></p>
      </section>
  `,
                    providers: [http_service_1.HttpService],
                    styleUrls: ["../css/app.css"]
                }), 
                __metadata('design:paramtypes', [http_service_1.HttpService])
            ], AppComponent);
            exports_1("AppComponent", AppComponent); //AppComponent class
        }
    }
});
//# sourceMappingURL=app.component.js.map