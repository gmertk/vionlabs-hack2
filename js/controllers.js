angular.module('myApp.controllers', [])
    .controller('LoginCtrl', ['$scope', 'loginService', 'syncData','$location', function($scope, loginService, syncData, $location) {
        $scope.login = function (cb) {
            loginService.login(function(err, user) {
                $scope.err = err? err + '' : null;
                if( !err ) {
                    cb && cb(user);
                    $scope.movies = [
                        {
plot: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
genres: "Crime, Drama",
rating: "9.3",
title: "The Shawshank Redemption",
url: "http://www.imdb.com/title/tt0111161/?ref_=chttp_tt_1",
poster_url: "http://ia.media-imdb.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@.jpg",
from: 'anon',
liked: false,
watched: false,
comment: "Watch this movie, you will like it"
},
{
plot: "A Jewish man has a wonderful romance with the help of his humour, but must use that same quality to protect his son in a Nazi death camp.",
genres: "Comedy, Drama, Romance",
rating: "8.6",
title: "Life Is Beautiful",
url: "http://www.imdb.com/title/tt0118799/?ref_=chttp_tt_30",
poster_url: "http://ia.media-imdb.com/images/M/MV5BMTM3NDg0OTkxOV5BMl5BanBnXkFtZTcwMTk2NzIyMQ@@.jpg",
from: 'anon',
liked: false,
watched: false,
comment: "Find me when you watch it"
}
                    ];

                    console.log( $scope.auth.user.uid);

                    syncData(['users', $scope.auth.user.uid, 'movies']).$bind($scope, 'movies');

                    $location.path( "/user/"+user.username );
                }
            });
        };
        $scope.logout = function () {
            loginService.logout();
        };
        
    }])
  
    .controller('UserProfileCtrl', ['$rootScope', '$scope', 'loginService', '$location', '$routeParams', function($rootScope, $scope, loginService, $location, $routeParams) {
        console.log($routeParams.username);
        console.log($rootScope.$root.auth.user);

    }])

  ;