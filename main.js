var app = angular.module('superApp', []);
app.controller('AppCtrl', function () {
    
});
app.directive('panel', function () {
    return {
        restrict: 'E',
        transclude: true,
        template: '<div class="jumbotron" ng-transclude>Keep me</div>'
    };
});