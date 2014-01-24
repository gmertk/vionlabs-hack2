angular.module('myApp.routes', ['ngRoute'])

   // configure views; the authRequired parameter is used for specifying pages
   // which should only be available while logged in
   .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/', {
         templateUrl: 'partials/home.html',
         controller: ''
      });

      $routeProvider.when('/login', {
         templateUrl: 'partials/login.html',
         controller: 'LoginCtrl'
      });

      $routeProvider.when('/user/:username', {
         templateUrl: 'partials/userProfile.html',
         controller: 'UserProfileCtrl'
      });
      $routeProvider.otherwise({redirectTo: '/'});
   }]);