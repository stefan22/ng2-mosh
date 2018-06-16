System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AuthorsService;
    return {
        setters:[],
        execute: function() {
            AuthorsService = class AuthorsService {
                getAuthors() {
                    return [
                        "author1", "author2", "author3", "author4", "author5"
                    ];
                } //getAuthors fn
            };
            exports_1("AuthorsService", AuthorsService); //AuthorsService class
        }
    }
});
//# sourceMappingURL=authors.service.js.map