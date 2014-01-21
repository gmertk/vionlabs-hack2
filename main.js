var myApp = angular.module('myApp', []);
myApp.factory('Avengers', function() {
    var Avengers = {};
    Avengers.cast = [
        {
            name: "Mert Karadogan",
            character: "Maven"
        },
        {
            name: "Orcun Doganci",
            character: "Iron Man"
        },
        {
            name: "Yigit Karadogan",
            character: "Agent"
        }
    ];
    return Avengers;
});

function AvengersCtrl($scope, Avengers) {
    $scope.avengers = Avengers;
}