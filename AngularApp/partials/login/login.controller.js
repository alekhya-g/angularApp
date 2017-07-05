(function() {
    'use strict';

    angular.module('angularApp').controller('LoginCntrl', LoginCntrl);

    LoginCntrl.$inject = ['$scope', '$state', '$rootScope'];

    function LoginCntrl($scope, $state, $rootScope) {
        
        // Login click action
        $scope.login = function(){
			$rootScope.userName = $scope.userName;
	  	    $state.go('home');
        };
    }
})();