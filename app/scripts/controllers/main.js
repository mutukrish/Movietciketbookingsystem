'use strict';

/**
 * @ngdoc function
 * @name primaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the primaApp
 */

angular.module('primaApp').controller('MainCtrl', ['$scope', '$location', 'Primashared', function ($scope, $location, Primashared) {

  	console.log("sd");

    $scope.ProceedSelection = function () {
    	
    	Primashared.setFirstName($scope.name);
    	Primashared.setReqSeats($scope.seats);
    	$location.path("/booking");
    }
}]);