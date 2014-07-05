'use strict';

angular.module('angular-help-overlay', []).directive('helpOverlay', ['$window', function ($window) {
  return {
    restrict: 'A',
    link: function(scope, element, attributes) {
      element.chardinJs();
    }
  };
}]);