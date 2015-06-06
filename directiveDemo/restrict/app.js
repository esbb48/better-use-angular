angular.module('demoRestrictApp', [])
.directive('helloE', function() {
  return {
    restrict: 'E',
    template: "<div>Hello World</div>"
  };
})
.directive('helloA', function() {
  return {
    restrict: 'A',
    template: "<div>Hello World</div>"
  };
})
.directive('helloC', function() {
  return {
    restrict: 'C',
    template: "<div>Hello World</div>"
  };
});