/// <reference path="../../typings/angularjs/angular.d.ts" />
angular.module('poc', [
    'ui.router'
]);
var Book = (function () {
    function Book(name) {
        this.name = name;
    }
    return Book;
})();
/// <reference path="../../typings/angularjs/angular.d.ts" />
/// <reference path="book.ts" />
var HomeController = (function () {
    function HomeController(bookRepository) {
        this.bookRepository = bookRepository;
        this.books = [];
        this.load();
    }
    HomeController.prototype.load = function () {
        this.bookRepository
            .getBooks()
            .then(function (books) {
            this.books = books;
        });
    };
    HomeController.$inject = ['BookRepository'];
    return HomeController;
})();
angular
    .module('poc')
    .controller('bookListController', HomeController);
/// <reference path="book.ts" />
var BookRepository = (function () {
    function BookRepository($q) {
        this.$q = $q;
    }
    BookRepository.prototype.getBooks = function () {
        return this.$q.when([
            new Book('book1'),
            new Book('book2'),
            new Book('book3')
        ]);
    };
    BookRepository.inject = ['$q'];
    return BookRepository;
})();
angular
    .module('poc')
    .service('BookRepository', BookRepository);
/// <reference path="../../typings/angularjs/angular.d.ts" />
var PocConfiguration = (function () {
    function PocConfiguration($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
            url: '/',
            templateUrl: 'src/js/book-list.controller.html',
            controller: 'bookListController',
            controllerAs: 'controller'
        });
    }
    PocConfiguration.$inject = ['$urlRouterProvider', '$stateProvider'];
    return PocConfiguration;
})();
angular
    .module('poc')
    .config(PocConfiguration);
