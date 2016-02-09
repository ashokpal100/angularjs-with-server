
var mainApp = angular.module("mainApp", ['ngRoute']);//create the module and name it mainapp
      mainApp.config(['$routeProvider', function($routeProvider) {   // configure our routes
            $routeProvider.
            
            when('/home', {  // route for the home page
               templateUrl: 'home.html',
               controller: 'mainController'
            }).
            
            when('/about', {
               templateUrl: 'about.html',
               controller: 'aboutController'
            }).
            when('/contact', {
               templateUrl: 'contact.html',
               controller: 'contactController'
            }).
            
            otherwise({
               redirectTo: '/home'
            });
         }]);
         
         mainApp.controller('mainController', function($scope) {// create the controller and inject Angular's $scope
     		$scope.message = 'Everyone come and see how good I look!';
         });
         
         mainApp.controller('aboutController', function($scope) {
            $scope.message = 'Look! I am an about page.';
         });

         mainApp.controller('contactController', function($scope) {
            $scope.message = 'Contact us! JK. This is just a demo.';

         });

   