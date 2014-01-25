angular.module('myApp.controllers', [])
    .controller('LoginCtrl', ['$scope', 'loginService', 'syncData','$location', function($scope, loginService, syncData, $location) {
        $scope.login = function (cb) {
            loginService.login(function(err, user) {
                $scope.err = err? err + '' : null;
                if( !err ) {
                    cb && cb(user);
                    $location.path( "/user/"+user.username );
                }
            });
        };
        $scope.logout = function () {
            loginService.logout();
            $location.path('/');
        };
        
    }])
  
    .controller('UserProfileCtrl', ['$rootScope', '$scope', 'loginService', '$location', 'syncData','$routeParams', 'waitForAuth',
        function($rootScope, $scope, loginService, $location, syncData, $routeParams, waitForAuth ) {
            waitForAuth.then(function() {
                console.log($routeParams.username);
                console.log($scope.auth.user);
                var userId = $scope.auth.user.uid;
                $scope.movies = syncData("/users/" + $scope.auth.user.uid + "/movies/");
                console.log($scope.movies);
            });
    }])

  ;