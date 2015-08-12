/*global angular:false */

angular.module('angularHelpOverlay', []).directive('helpOverlay', ['$document', function ($document) {
  var noop = false; // Special flag in case we get an a chardinJs change event outside of our control.
  return {
    restrict: 'A',
    scope: {
      helpOverlay: '=',
      overlayStart: '&overlayStartCallback',
      overlayStop: '&overlayStopCallback'
    },
    link: function (scope, element, attrs) {

      $document.on('chardinJs:start', function (event) {
        if (angular.isFunction(scope.overlayStart)) {
          scope.overlayStart(event);
        }

        if (scope.helpOverlay === false) {
          scope.$apply(function () {
            noop = true;
            scope.helpOverlay = true;
          });
        }
      });

      $document.on('chardinJs:stop', function (event) {
        if (angular.isFunction(scope.overlayStop)) {
          scope.overlayStop(event);
        }

        if (scope.helpOverlay === true) {
          scope.$apply(function () {
            noop = true;
            scope.helpOverlay = false;
          });
        }
      });

      scope.$watch('helpOverlay', function (newValue, oldValue) {
        if (newValue !== oldValue) {
          if (noop === true) {
            noop = false;
          } else if (newValue === true) {
            $(element).chardinJs('start');
          } else if (newValue === false) {
            $(element).chardinJs('stop');
          }
        }
      });
    }
  };
}]);