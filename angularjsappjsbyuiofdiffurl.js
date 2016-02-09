var routerApp = angular.module('routerApp', ['ui.router']);
routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'homeui.html'
        })
        .state('home.list', {
            url: '/list',
            templateUrl: 'homeui list.html',
            controller: function($scope) 
            {
                $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle','abc','xyz'];
            }
        })
        .state('home.paragraph', {
            url: '/paragraph',
             templateUrl: 'para.html'
        })    
});
