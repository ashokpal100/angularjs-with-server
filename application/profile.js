var mainapp = angular.module('mainApp', []);
    mainapp.controller('myCtr', function($scope) {
      
       var data={};
      
      $scope.submitForm = function() {
      alert('form is submit successfully');
      data.id=$scope.id;
       data.name=$scope.name;
       data.email=$scope.email;
       data.mobile=$scope.mobileNum;
       data.gender=$scope.gender;
       data.year=$scope.year;
       data.address=$scope.address;
       if ($scope.crsmca) {data.course1='MCA';};
       if ($scope.crsmba) {data.course2='MBA';};
      console.log(data);
  };
});