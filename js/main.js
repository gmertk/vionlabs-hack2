angular.module('app', ['firebase', 'ui.bootstrap','myApp.controllers', 'myApp.routes',
    'waitForAuth', 'myApp.services', 'myApp.config'])
    .run(['loginService', '$rootScope', 'FBURL', function(loginService, $rootScope, FBURL) {
        $rootScope.auth = loginService.init('/login');
        $rootScope.FBURL = FBURL;
    }]);