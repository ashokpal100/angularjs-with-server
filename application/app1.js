var profileApp = angular.module('profileApp', ['ui.router']);

profileApp.config(function($stateProvider, $urlRouterProvider) {
    
    $stateProvider
        
        // PROFILE STATES ========================================
        .state('Personal', {
            url: '/Personal',
            templateUrl: 'profile-Personal.html',
            controller: 'personalCtr'
            
        })
        
        .state('Qualification', {
            url: '/Qualification',
            templateUrl: 'profile-Qualification.html',
            controller: 'qualificationCtr'
        })

        .state('changepassword', {
            url: '/changepassword',
            templateUrl: 'profile-ChangePassword.html',
            controller: 'passwordCtr'
        });
});
profileApp.controller('personalCtr', function($scope) {
      $scope.user={};
      $scope.submitForm = function() 
      {
        console.log($scope.user);
    };
});
profileApp.controller('qualificationCtr', function($scope) {
      $scope.qua={};
      $scope.submitForm = function() 
      {
        console.log($scope.qua);
    };
});
profileApp.controller('passwordCtr', function($scope) {
      $scope.password={};
      $scope.submitForm = function() 
      {
        console.log($scope.password);
    };
});