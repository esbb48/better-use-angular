angular.module('demoScopeApp', [])
.controller('demoScopeController', function($scope) {
  $scope.message = "Use Parent Scope";
})
.directive('scopeIsFalse', function() {
  return {
    restrict: 'E',
    scope: false,
    link: function(scope){
      // scope.message = '我是爸爸、爸爸是我';
    },
    template: "<div>{{message}}</div>"
  };
})
.directive('scopeIsTrue', function() {
  return {
    restrict: 'E',
    scope: true,
    link: function(scope){
      // scope.message = '繼承爸爸，但我是獨立的';
    },
    template: "<div>{{message}}</div>"
  }
})
.directive('scopeIsObject', function() {
  return {
    restrict: 'E',
    scope: {},
    link: function(scope){
      // scope.message = "不繼承爸爸，我是獨立的！";
    },
    template: "<div>{{message}}</div>"
  };
});