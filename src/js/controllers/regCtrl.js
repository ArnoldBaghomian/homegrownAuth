'use strict';

var app = angular.module('someApp');

app.controller('regCtrl', ["$scope", "$http", function($scope, $http) {
  $scope.regAdd = function(){

    var email = $scope.email1
    // var username= $scope.regUser
    // var image= $scope.regImage
    // console.log("image", image)

    if ($scope.pass1 !==  $scope.pass2){
      return swal("Sorry, Passwords do not match ")
    }
    else{
      var password = $scope.pass1
      swal('Registration Completed')
      
    }
    console.log("email:", email, "password:", password)
    $http.post('/user/register', {email: email, password: password})
  }
  console.log('regCtrl');
}]);