/// <reference path="book.ts" />

class BookRepository {
    static $inject = ['$q'];

    constructor(private promiseService:ng.IQService) {
    }

    getBooks():ng.IPromise<Array<Book>> {
        return this.promiseService.when([
            new Book('book1'),
            new Book('book2'),
            new Book('book3')
        ]);
    }
}

angular
    .module('poc')
    .service('BookRepository', BookRepository);