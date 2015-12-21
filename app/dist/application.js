/// <reference path="../def/angular.d.ts" />
angular.module('poc', [
    'ui.router'
]);
var Book = (function () {
    function Book(name) {
        this.name = name;
    }
    return Book;
})();
/// <reference path="../def/angular.d.ts" />
/// <reference path="book.ts" />
var HomeController = (function () {
    function HomeController() {
        this.books = [];
        this.books = [
            new Book('book1'),
            new Book('book2'),
            new Book('book3')
        ];
    }
    return HomeController;
})();
angular
    .module('poc')
    .controller('bookListController', HomeController);
/// <reference path="../def/angular.d.ts" />
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
