var mainapp = angular.module('mainApp', []);
    mainapp.controller('myCtr', function($scope) {
      
      $scope.submitLogin= function() 
      {
        alert("hi");
         $scope.loginfm={};
         console.log($scope.loginfm.user);
     };
});