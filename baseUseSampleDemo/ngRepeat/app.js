angular.module('baseApp', [])
.controller('baseController', function($scope) {
  $scope.messages = [
    {content:"Hello!"},
    {content:"哈囉 !"},
    {content:"這是測試"}
  ];
});