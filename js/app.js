angular.module('myApp', [])
    .controller('MyController', function($scope) {
        $scope.hello = 'Hello';
        $scope.count = 0;
        $scope.sayHello = function(){
            $scope.Hey = $scope.hello + " " + $scope.name;
            $scope.count++;
        }
    })
    .directive('myDirective', function(){
        return {
            restrict: 'E',
            replace: true,
            scope: {},
            controller: 'MyController',
            template:'<div>{{Hey}} number {{count}}<button ng-click="sayHello()"></button></div>'
        };
    });