'use strict';

/**
 * @ngdoc overview
 * @name whosfilmingFrontendApp
 * @description
 * # whosfilmingFrontendApp
 *
 * Main module of the application.
 */
angular
  .module('whosfilmingFrontendApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/dashboard', {
            templateUrl: 'views/dashboard.html',
            controller: 'DashboardCtrl'
      })
      .when('/director', {
            templateUrl: 'views/director.html',
            controller: 'DirectorCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
