(function() {
    'use strict';

    angular.module('assessmentUser').factory('sessionFactory', sessionFactory);

    sessionFactory.$inject = ['$rootScope'];

    function sessionFactory($rootScope) {

        var service = {};

        service.saveUserID = function (userId,loggedUser,firstname,lastname,moodlePassword,status,count){
           localStorage.userId = userId;
           localStorage.loggedUser = loggedUser;
           localStorage.firstname = firstname;
           localStorage.lastname = lastname;
           localStorage.moodlePassword = moodlePassword;
           localStorage.status = status;
           localStorage.count = count;
        }
        service.saveUserTests = function (userTests){
           console.log(userTests);
           localStorage.userTests = userTests;
           localStorage.image1 = userTests[0]?userTests[0]:"";
           localStorage.image2 = userTests[1]?userTests[1]:"";
           localStorage.image3 = userTests[2]?userTests[2]:"";
           console.log(localStorage.userTests);
        }
        service.restoreUserTests = function (){
           $rootScope.userTests = localStorage.userTests;
           return $rootScope.userTests;
        }
        service.restoreImage1 = function (){
           $rootScope.image1 = localStorage.image1;
           return $rootScope.image1;
        }
        service.restoreImage2 = function (){
           $rootScope.image2 = localStorage.image2;
           return $rootScope.image2;
        }
        service.restoreImage3 = function (){
           $rootScope.image3 = localStorage.image3;
           return $rootScope.image3;
        }
        service.restoreCount = function (){
           $rootScope.count = localStorage.count;
           return $rootScope.count;
        }
        service.restoreUserID = function (){
           $rootScope.userId = localStorage.userId;
           return $rootScope.userId;
        }
        service.restoreUserName = function (){
           $rootScope.loggedUser = localStorage.loggedUser;
           return $rootScope.loggedUser;
        }
        service.restoreFirstname = function (){
           $rootScope.firstname = localStorage.firstname;
           return $rootScope.firstname;
        }
        service.restoreLastname = function (){
           $rootScope.lastname = localStorage.lastname;
           return $rootScope.lastname;
        }
        service.restoreUserPassword = function (){
           $rootScope.moodlePassword = localStorage.moodlePassword;
           return $rootScope.moodlePassword;
        }
        service.restoreStatus = function (){
           $rootScope.assessmentStatus = localStorage.status;
           return $rootScope.assessmentStatus;
        }
        return service;

    }

})();
