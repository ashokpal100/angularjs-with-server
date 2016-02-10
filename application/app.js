var mainapp = angular.module('mainApp', []);
    mainapp.controller('myCtr', function($scope) {
      $scope.user={};
      $scope.submitLogin= function() 
      {
         console.log($scope.user);
     };
});
