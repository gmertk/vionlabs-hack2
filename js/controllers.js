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
                    // var currentPageUsername = $location.path().split('/')[2];
                    var currentPageUsername = window.location.hash.split('/')[2];

                    if ($scope.auth.user.username === currentPageUsername) {
                        $scope.movies = syncData("/users/" + $scope.auth.user.username + "/movies/");
                        $scope.otherProfile = false;

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
                username: url.split('/')[2],
            };

            $scope.currentUrl = $location.absUrl();
                
            $scope.user.picture = "http://graph.facebook.com/"+ $scope.user.username +"/picture?type=large";
            
            var informationRef = firebaseRef("/users/" + $scope.user.username + "/information/");

            $scope.user.information = $firebase(informationRef);
            console.log($scope.user.information);
            $scope.user.information.$bind($scope, 'information');

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
                if ($scope.auth.user) {
                    movie.from = $scope.auth.user.username;
                }
                else {
                    movie.from = "Someone";
                }
                
                movie.comment = comment;
                if(movie.title.length>44){
                    movie.title = movie.title.substring(0,40);
                    movie.title += "...";
                }
                $scope.pushedMovies.push(movie);
                console.log(movie);
                $firebase(moviesRef).$add(movie);
                
                var messages = [
                    "Good job!",
                    "Great movie!",
                    "Cheers!",
                    "Awesome, thanks!",
                    "Booyah!",
                    "Done!",
                    "Coooooooool!"
                ];
                $scope.alerts.push({msg: messages[Math.floor(Math.random() * messages.length)], type:"success"});
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