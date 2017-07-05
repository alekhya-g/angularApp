'use strict';

var app = angular.module('angularApp', ['ui.router']);


app.config(function($stateProvider, $urlRouterProvider) {
    
    $stateProvider
        
        .state('home', {
            url: '/home',
            templateUrl: 'partials/home/home.html',
			controller: 'HomeCntrl'
        })

        .state('login', {
            url: '/login',
            templateUrl: 'partials/login/login.html',
			controller: 'LoginCntrl'
        })

        .state('/', {
            url: '/',
            templateUrl: 'partials/login/login.html',
            controller: 'LoginCntrl'			
			
        });

        $urlRouterProvider.otherwise('/');
});
