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
        'firebaseRef','$routeParams', 'waitForAuth', '$firebase', 'moviedb', '$timeout', 'syncData', '$http', 'checkIfUserExists',
        function($rootScope, $scope, loginService, $location, firebaseRef,
            $routeParams, waitForAuth, $firebase, moviedb, $timeout, syncData, $http, checkIfUserExists) {
            waitForAuth.then(function() {
                if ($scope.auth.user) { // Logged in
                    var currentPageUsername = $location.path().split('/')[2];
                    
                    if ($scope.auth.user.username === currentPageUsername) { // I am on my profile
                        $scope.movies = syncData("/users/" + $scope.auth.user.username + "/movies/");
                        $scope.currentUserUrl = $location.absUrl();
                        $scope.otherProfile = false;
                        syncData('/users/' + $scope.auth.user.username + '/tagline').$bind($scope, 'tagline');

                        $scope.keypressCallback = function($event) {
                            console.log($event.target.blur());
                            $event.preventDefault();
                        };
                    }
                    else { // I am on someone else
                        $scope.otherProfile = true;
                    }
                }
                else { // Not logged in
                    $scope.otherProfile = true;
                }

                if ($scope.otherProfile) {
                    $scope.userInView = {
                        username: $location.path().split('/')[2]
                    };

                    checkIfUserExists('/users/', $scope.userInView.username, function (userId, isExists) {
                        if (!isExists) {
                            $scope.$apply(function() { $location.path("/"); });
                        }
                        else {
                            $scope.alerts = [];
                            $scope.pushedMovies = [];
                            $scope.moviedb = moviedb;
    
                            $scope.userInView.picture = "http://graph.facebook.com/"+ $scope.userInView.username +"/picture?type=large";
                    

                            var coverPictureUrl = "https://graph.facebook.com/"+ $scope.userInView.username + "?fields=cover";

                            $http({method: 'GET', url:coverPictureUrl})
                            .success(function(data, status, headers, config) {
                                $scope.userInView.coverPicture = data.cover.source;
                                // console.log($scope.user.coverPicture);

                            }).error(function(data, status, headers, config) {
                                // $scope.status = status;
                            });


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
                                // console.log(movie);
                                
                                var ref = new Firebase('https://vivid-fire-7723.firebaseio.com/users/'+$scope.userInView.username+"/movies");
                                $firebase(ref).$add(movie);
                                
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


                        }
                    });


                    

                }
            });


        

    }])

  ;