(function() {
    'use strict';

    angular.module('assessmentUser').service('HomeService', HomeService);

    HomeService.$inject = ['$http','$rootScope'];

    function HomeService($http,$rootScope) {

        this.programmingMethod = function (userID){
           $rootScope.host = host;
            return $http({
                method: 'GET',
                //url: $rootScope.host+'/programmingExercise',  //Using REST call
                url: 'api/codeReview.json',  //Using local json file
                params: {"user_id" : userID},
                }).success(function (data,status) {
                    console.log("Success Status "+status);
                })
                .error(function (error, status) {
                    console.log("Error Status "+status);
                    swal("Error!", "Programming Exercise Service Failed", "error");
                    $('#overlay').fadeOut();
                });
        }
		this.UserStatusMethod = function (userID){
           $rootScope.host = host;
           return $http({
                method: 'GET',
                //url: $rootScope.host+'/userAssesmentStatus',  //Using REST call
                url: 'api/userStatus.json',  //Using local json file
                params: {"user_id" : userID},
                }).success(function (data,status) {
                    console.log("Success Status "+status);
                })
                .error(function (error, status) {
                    console.log("Error Status "+status);
                    swal("Error!", "User Assesment Status Service Failed", "error");
                    $('#overlay').fadeOut();
                });
        }
    }
})();
