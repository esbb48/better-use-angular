angular.module('baseApp', [])
.controller('baseController', function($scope) {

  $scope.messages = [
    {content:"Hello!", from: "ALi"},
    {content:"哈囉 !!!!!!!!!!!", from: "Ann" },
    {content:"這是測試", from: "Bee"}
  ];

  $scope.formData = {
    content: "Karma !!!!",
    from: "MM ^__^"
  };

  $scope.sendMsg = function(){
    $scope.messages.push($scope.formData);
    $scope.formData = {content: "", form: ""};

  };
  $scope.article = {
    title: "Karma - Spectacular Test Runner for Javascript",
    content: "On the AngularJS team, we rely on testing and we always seek better tools to make our life easier.\
     That's why we created Karma - a test runner that fits all our needs."
  };
})

.directive('msgBox', function() {
  return {
    restrict: 'E',
    templateUrl: 'my-customer.html'
  };
});
