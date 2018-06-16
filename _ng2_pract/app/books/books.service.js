System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var BooksService;
    return {
        setters:[],
        execute: function() {
            BooksService = class BooksService {
                getBooks() {
                    return [
                        "books1", "books2", "books3", "books4", "books5"
                    ];
                } //getBooks fn
            };
            exports_1("BooksService", BooksService); //BooksService class
        }
    }
});
//# sourceMappingURL=books.service.js.map