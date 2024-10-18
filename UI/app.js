var app = angular.module('myApp', []);

app.controller('MainController', function($scope, $http) {
    $scope.name = "Hello from AngularJS!";

    $scope.getMessage = function() {
        $scope.name = "a new name"
        $http.get('http://localhost:8080/api/hello')  // Adjust the URL if needed
            .then(function(response) {
                $scope.name = response.data.name;
            }, function(error) {
                $scope.name = error;
                console.log(error);
            });
    };
});
