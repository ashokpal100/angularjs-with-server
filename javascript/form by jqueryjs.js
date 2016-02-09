var mainapp = angular.module('mainApp', []);
    mainapp.controller('myCtr', function($scope) {
      var data={};
      $scope.user={};
      $scope.submitForm = function() 
      {
      
        if (typeof($scope.user.name)=='undefined') {
          $scope.msg1='enter the name';
        } else{
          $('#validitionMsg1').remove('i');
        };
        if (typeof($scope.user.email)=='undefined') {$scope.msg2='enter the email';}else{$('#validitionMsg2').remove('i')};
        if (typeof($scope.user.mobile)=='undefined') {$scope.msg3='enter the mobile number';}else{$('#validitionMsg3').remove('i')};
       if (typeof($scope.user.gender)=='undefined') {$scope.msg4='enter gender';}else{$('#validitionMsg4').remove('i')};
       if ($scope.user.crsMca=='MCA' || $scope.user.crsMba=='MBA') {$('#validitionMsg5').remove('i')}else{$scope.msg5='enter course';};
       if (typeof($scope.user.year)=='undefined') {$scope.msg6='enter year';}else{$('#validitionMsg6').remove('i')};
       if (typeof($scope.user.address)=='undefined') {$scope.msg7='enter address';}else{$('#validitionMsg7').remove('i')};
       if (typeof($scope.user.name)!='undefined' && typeof($scope.user.email)!='undefined' && typeof($scope.user.mobile)!='undefined'&&
       typeof($scope.user.year)!='undefined'&& typeof($scope.user.address)!='undefined'&& (typeof($scope.user.crsMca)!='undefined'||typeof($scope.user.crsMba)!='undefined'))
      {
          console.log($scope.user);
          alert("submit succressfully.....");
          $scope.user="";
      };
    };
});