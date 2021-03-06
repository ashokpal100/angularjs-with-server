  
var formApp=angular.module('formApp', ['ui.router'])
 alert("hi i am in javascript");
formApp.config(function($stateProvider, $urlRouterProvider) {
 
    $stateProvider
    
        // route to show our basic form (/form)
        .state('form', {
            url: '/form',
            templateUrl: 'form.html',
            controller: 'formController'
        })
        
        // nested states 
        // each of these sections will have their own view
        // url will be nested (/form/profile)
        .state('form.profile', {
            url: '/profile',
            templateUrl: 'form-profile.html'
        })
        
        // url will be /form/interests
        .state('form.interests', {
            url: '/interests',
            templateUrl: 'form-interests.html'
        })
        
        // url will be /form/payment
        .state('form.payment', {
            url: '/payment',
            templateUrl: 'form-payment.html'
        });
       
    // catch all route
    // send users to the form page 
    $urlRouterProvider.otherwise('/form/profile');
})

formApp.controller('formController', function($scope) {
    $scope.formData = {};
    $scope.processForm = function() {
        alert('awesome!');  
    };
    
});

