var app = angular.module('app', []);

app.directive('clock', function () {
    return {
        restrict: 'E',
        scope: {
            timezone: '@'
        },
        template: '<div>12:00pm {{timezone}}</div>'
    };
});

app.directive('panel', function (){
    return {
        restrict: 'E',
        scope: {
            title: '@'
        },
        transclude: true,
        template: '<div class="jumbotron">' +
            '{{title}}' +
            '<div ng-transclude></div></div>'
    };
});