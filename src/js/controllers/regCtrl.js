'use strict';

var app = angular.module('someApp');

app.controller('regCtrl', ["$scope","$log", "$http", function($scope, $log, $http) {
  $scope.regClick = function(){

    var email = $scope.regEmail
    // var username= $scope.regUser
    // var image= $scope.regImage
    // console.log("image", image)

    if ($scope.regPass !==  $scope.regPass2){
      return swal("Sorry, Passwords do not match ")
      $log.warn(" no good")
    }
    else{
      var password = $scope.regPass
      swal('Registration Completed')
      $log.info('thank you')
      
    }
    console.log("email:", email, "password:", password)
    $http.post('/user/register', {email: email, password: password})
  }
  console.log('regCtrl');
}]);