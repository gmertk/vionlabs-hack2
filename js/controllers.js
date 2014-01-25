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

        $scope.goToProfile = function () {
            $location.path( "/user/"+$scope.auth.user.username );
        };
        
    }])
  
    .controller('UserProfileCtrl', ['$rootScope', '$scope', 'loginService', '$location',
        'firebaseRef','$routeParams', 'waitForAuth', '$firebase', 'moviedb', '$timeout', 'syncData', '$http',
        function($rootScope, $scope, loginService, $location, firebaseRef, $routeParams, waitForAuth, $firebase, moviedb, $timeout, syncData, $http ) {
            waitForAuth.then(function() {
                //console.log($routeParams.username);
                // console.log($scope.auth.user);
                if ($scope.auth.user) {
                    var currentPageUsername = $location.path().split('/')[2];
                    if ($scope.auth.user.username === currentPageUsername) {
                        $scope.movies = syncData("/users/" + $scope.auth.user.username + "/movies/");
                    }
                    else {
                        $scope.otherProfile = true;
                    }
                }
            });

            $scope.otherProfile = true;
            $scope.alerts = [];
            $scope.pushedMovies = [];
            $scope.moviedb = moviedb;

            var url = $location.path();
            $scope.user = {
                username: url.split('/')[2]
            };
                
            $scope.user.picture = "http://graph.facebook.com/"+ $scope.user.username +"/picture?type=large";

            var coverPictureUrl = "https://graph.facebook.com/"+ $scope.user.username + "?fields=cover";

            $http({method: 'GET', url:coverPictureUrl})
            .success(function(data, status, headers, config) {
                $scope.user.coverPicture = data.cover.source;
                // console.log($scope.user.coverPicture);

            }).error(function(data, status, headers, config) {
                // $scope.status = status;
            });


            var moviesRef = firebaseRef("/users/" + $scope.user.username + "/movies/");
            $scope.pushMovie = function (movie, comment) {
                movie.from = "Someone";
                movie.comment = comment;
                
                $scope.pushedMovies.push(movie);
                console.log(movie);
                $firebase(moviesRef).$add(movie);
                
                $scope.alerts.push({msg: "What a push, thank you!", type:"success"});
                $timeout(function () {
                    $scope.alerts.splice($scope.alerts.length-1, 1);
                }, 1500);
                
            };

            $scope.isPushed = function (movie) {
                for (var i = 0; i < $scope.pushedMovies.length; i++) {
                    if ($scope.pushedMovies[i].title === movie.title) {
                        return true;
                    }
                }
                return false;
            };

    }])

  ;