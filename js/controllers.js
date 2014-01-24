angular.module('myApp.controllers', [])
  .controller('MyCtrl', ['$scope', "$firebase", "$firebaseSimpleLogin", function($scope, $firebase, $firebaseSimpleLogin) {
    var ref = new Firebase("https://mert-firebase.firebaseio.com/users");
    $scope.auth = $firebaseSimpleLogin(ref);
    $scope.$watch('auth', function(newVal, oldVal) {
      console.log(newVal);
    });
  }])
  ;