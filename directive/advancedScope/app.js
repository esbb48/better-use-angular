angular.module('demoScopeApp', [])
.controller('demoScopeController', function($scope) {
  $scope.title = "This is Title";
  $scope.textValue = "Hello";
  $scope.changeOutsideTitle = function(){
    $scope.textValue = "Update Outsite textValue!!!!!!!!!";
  };
})

.directive('inputComponent', function() {
  return {
    restrict: 'E',
    scope: {
      title: "@",
      textValue: "=",
      onClick: "&"
    },
    templateUrl: "input.html"
  };
})

