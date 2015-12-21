/// <reference path="../def/angular.d.ts" />

class PocConfiguration {
    static $inject = ['$urlRouterProvider', '$stateProvider'];

    constructor($urlRouterProvider:any, $stateProvider:any) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'src/js/book-list.controller.html',
                controller: 'bookListController',
                controllerAs: 'controller'
            });
    }
}

angular
    .module('poc')
    .config(PocConfiguration);