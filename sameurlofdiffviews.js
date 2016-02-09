var routerApp = angular.module('routerApp', ['ui.router']);
routerApp.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('about', {
            url: '/about',
            views: {
                '': { templateUrl: 'ui-about.html' },
                'columnOne@about': { template: '2 view Look I am a column!' },
                'columnTwo@about': { templateUrl: 'table-data.html',controller: 'scotchController'},
                'columnThree@about':{template:' 3 view ashok pal'}
            }
        });
});
routerApp.controller('scotchController', function($scope) {
    $scope.scotches = [
        {
            name: 'Macallan 12',
            price: 50
        },
        {
            name: 'Chivas Regal Royal Salute',
            price: 100
        },
        {
            name: 'Glenfiddich 1937',
            price: 200
        }
    ];
    
});