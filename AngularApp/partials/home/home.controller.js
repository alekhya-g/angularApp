(function() {
    'use strict';

    angular.module('angularApp').controller('HomeCntrl', HomeCntrl);

    HomeCntrl.$inject = ['$scope', '$state', '$rootScope'];

    function HomeCntrl($scope, $state, $rootScope) {
        var d = new Date().getHours();
        d < 12? $scope.message = "Morning" : ( (d > 11 && d < 18) ? $scope.message = "Afternoon" : $scope.message = "Evening");
        //logout click action
        $scope.logout = function(){
             $rootScope.userName = "";
             $state.go("login");
        };
    }
})();
