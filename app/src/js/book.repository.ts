/// <reference path="book.ts" />

class BookRepository {
    static inject = ['$q'];

    private $q : any;

    constructor($q:any){
        this.$q = $q;
    }

    getBooks(): ng.IPromise<Array<Book>> {
        return this.$q.when([
            new Book('book1'),
            new Book('book2'),
            new Book('book3')
        ]);
    }
}

angular
    .module('poc')
    .service('BookRepository', BookRepository);