'use strict';

angular.module('angularHelpOverlay', []).directive('helpOverlay', ['$document', function ($document) {
  return {
    restrict: 'A',
    scope: {
      helpOverlay: '=',
      helpStart: '&',
      helpStop: '&'
    },
    link: function (scope, element, attrs) {

      $document.on('chardinJs:start', function (event) {
        if (angular.isFunction(scope.helpStart)) {
          scope.helpStart(event);
        }

        console.log('START');
        if (scope.helpOverlay === false) {
          scope.$apply(function () {
            scope.helpOverlay = true;
          });
        }
      });

      $document.on('chardinJs:stop', function (event) {
        if (angular.isFunction(scope.helpStop)) {
          scope.helpStop(event);
        }

        console.log('STOP');
        if (scope.helpOverlay === true) {
          scope.$apply(function () {
            scope.helpOverlay = false;
          });
        }
      });

      scope.$watch('helpOverlay', function (newValue, oldValue) {
        if (newValue !== oldValue) {
          if (newValue === true) {
            element.chardinJs('start');
          } else if (newValue === false) {
            element.chardinJs('stop');
          }
        }
      });
    }
  };
}]);