/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="book.ts" />

class HomeController {

    static $inject = ['BookRepository'];

    private books:Array<Book> = [];

    constructor(private bookRepository:BookRepository) {
        this.load();
    }

    load():void {
        this.bookRepository
            .getBooks()
            .then(function (books:Array<Book>) {
                this.books = books;
            }.bind(this));
    }
}

angular
    .module('poc')
    .controller('bookListController', HomeController);