(function () {
    'use strict';

    angular.module('assessmentUser').service('LoginService', LoginService);

    LoginService.$inject = ['$http','$rootScope'];

    function LoginService($http,$rootScope) {

        this.authenticate = function (username, password) {
            $rootScope.host = host;
            return $http({
                method: 'POST',
                //url: $rootScope.host+'/signin',  //Using REST call
                url: 'api/login.json',  //Using local json file
                params: {username: username, password: password},
            }).success(function (data, status) {
                    console.log("Success Status " + status);
                })
                .error(function (error, status) {
                    console.log("Error Status " + status);
                    $('#overlay').fadeOut();
                    swal("Error!", "Login Service Failed!!", "error");
                });
        }
    }
})();
