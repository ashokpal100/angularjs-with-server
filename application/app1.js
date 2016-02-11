var profileApp = angular.module('profileApp', ['ui.router']);

profileApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/personal');
    $stateProvider
        
        // PROFILE STATES ========================================
        .state('personal', {
            url: '/personal',
            templateUrl: 'profile-Personal.html',
            controller: 'personalCtr'
            
        })
        
        .state('qualification', {
            url: '/qualification',
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
         if (($scope.password.newpassword)==($scope.password.repeatpassword)) 
         {
            $("#validitionMsg").hide();
              console.log($scope.password);
         } else
         {

           $scope.msg='password not match';
            $("#validitionMsg").show();
         };
    };
});