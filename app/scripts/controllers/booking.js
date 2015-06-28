'use strict';

/**
 * @ngdoc function
 * @name primaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the primaApp
 */
angular.module('primaApp')
  .controller('BookingCtrl', ['$scope', 'Primashared', 'localStorageService', '$location' , function ($scope, Primashared, localStorageService, $location) {
     // Init layout
        $scope.rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
        $scope.cols = [1, 2, 3, 4, 5, 6, 7, 8];
        $scope.bookingHistory=[];
        
        $scope.storagebookingHistory = localStorageService.get("bookingHistory");

        if(localStorageService.get("bookingHistory") === null) {
        	 $scope.storagebookingHistory = [];
        }
        $scope.name = Primashared.getFirstName();
        $scope.reqSeats = Primashared.getReqSeats();


        // Set reserved and selected
        //
       	var reserved = []; 
     	
       	reserved = localStorageService.get("seats");
       	if(localStorageService.get("seats") === null) {
       		reserved = [];
       	}
        var selected = [];
        $scope.seatSelected = 0;
        $scope.seatNumber = "No Seats Slected";

        // seat onClick
        $scope.seatClicked = function(seatPos) {
            console.log("Selected Seat: " + seatPos);
            var index = selected.indexOf(seatPos);
            if(index != -1) {
                // seat already selected, remove
                selected.splice(index, 1)
            } else {
                // new seat, push
                selected.push(seatPos);

            }	
            if(selected.length > 0) {
            	$scope.seatNumber = selected;
            } else {
            	$scope.seatNumber = "No Seats Slected";
            }

            	$scope.seatSelected = selected.length;
            
        }

        // get seat status
        $scope.getStatus = function(seatPos) {
            if(reserved.indexOf(seatPos) > -1) {
                return 'reserved';
            } else if(selected.indexOf(seatPos) > -1) {
                return 'selected';
            }
        }


        // clear selected
        $scope.clearSelected = function() {
            selected = [];
            $scope.seatNumber = "No Seats Slected";
            $scope.seatSelected = 0;
        }

        // show selected
        $scope.showSelected = function() {

            if(selected.length == $scope.reqSeats) {
            	var sel = reserved.concat(selected);
            	localStorageService.set("seats", sel);
            	$scope.bookingHistory.push({'name':$scope.name,'seats':$scope.reqSeats,'seatnos':selected});
            	var bookings =  $scope.storagebookingHistory.concat($scope.bookingHistory);
            	
            	localStorageService.set("bookingHistory", bookings);
            	console.log($scope.bookingHistory);
                $location.path("/bookingsuccess");
            } else{
                alert(" Required Seats does not match the total number of seats selected number");
            }
        }
  }]);
