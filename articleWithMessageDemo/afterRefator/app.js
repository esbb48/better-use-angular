app = angular.module('baseApp', [])

app.controller('baseController', function($scope, article, messages, messageServ) {
  $scope.article = article;
  $scope.formData = messageServ.formData;
  $scope.messages = messages;
  $scope.sendMsg = messageServ.sendMsg;
});

app.directive('msgBox', function() {
  return {
    restrict: 'E',
    templateUrl: 'msgBox.html',
    scope: {
      data: "="
    }
  }
});

app.service('article',function(){
  this.title = "Karma - Spectacular Test Runner for Javascript";
  this.content = "On the AngularJS team, we rely on testing and we always seek better tools to make our life easier. \
  That's why we created Karma - a test runner that fits all our needs.";
});

app.service('messages',function(){

  return [
    {content:"Hello!", from: "ALi"},
    {content:"哈囉 !!!!!!!!!!!", from: "Ann" },
    {content:"這是測試", from: "Bee"}
  ];

});


app.factory('messageServ',function(messages){
  self = this;
  self.defaultFormData = {
    content: 'Hello World !',
    from: 'Mm'
  };

  self.cleanFormData = function(formData) {
    formData.content = "";
    formData.from = "";
    return formData;
  }

  self.clone = function(formData) {
    return JSON.parse(JSON.stringify(formData));
  }

  return {
    formData: self.defaultFormData,
    sendMsg: function(formData){
      cloneFormData = self.clone(formData);
      messages.push(cloneFormData);
      formData = self.cleanFormData(formData);
    }
  };
});
