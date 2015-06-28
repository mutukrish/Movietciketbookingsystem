'use strict';

/**
 * @ngdoc service
 * @name primaApp.myService
 * @description
 * # myService
 * Service in the primaApp.
 */

app.factory('Primashared', function () {

    var data = {
        firstName: '',
        seats: ''
    };

    return {
        getFirstName: function () {
            return data.firstName;
        },
        setFirstName: function (firstName) {
            data.firstName = firstName;
            console.log(data.firstName);
        },

        getReqSeats: function () {
            return data.seats;
        },
        setReqSeats: function (seats) {
            data.seats = seats;
        }
    };
});
