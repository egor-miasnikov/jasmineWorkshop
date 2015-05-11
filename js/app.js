angular.module('myApp', [])
    .controller('MyController', function($scope, lastName) {
        $scope.hello = 'Hello';
        $scope.sayHello = function(){
            return $scope.hello + " " + $scope.name + ' ' + lastName;
        }
    })
    .directive('myDivective', function(){
        return {

        }
    });