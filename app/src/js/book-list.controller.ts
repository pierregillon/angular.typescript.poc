/// <reference path="../def/angular.d.ts" />
/// <reference path="book.ts" />

class HomeController {
    private books:Array<Book> = [];

    constructor() {
        this.books = [
            new Book('book1'),
            new Book('book2'),
            new Book('book3')
        ];
    }
}

angular
    .module('poc')
    .controller('bookListController', HomeController);