'use strict';

/**
 * @ngdoc overview
 * @name primaApp
 * @description
 * # primaApp
 *
 * Main module of the application.
 */
var app = angular
  .module('primaApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'LocalStorageModule'
  ]);
app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/booking', {
        templateUrl: 'views/booking.html',
        controller: 'BookingCtrl'
      })
      .when('/bookingsuccess', {
        templateUrl: 'views/bookingsuccess.html',
        controller: 'BookingCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
