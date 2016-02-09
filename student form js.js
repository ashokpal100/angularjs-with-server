var mainApp = angular.module('mainApp', []);
mainApp.controller('myCtr', function($scope) 
{
    $scope.sub=function()
    {
        var data={};
        data.name=$scope.fname;
        data.mail=$scope.mail;
        data.user=$scope.user;
        data.pass=$scope.pass;
        console.log(data);
    } 
});