angular.module('app', ['angularHelpOverlay']).controller('MainCtrl', function ($scope) {
  $scope.showHelp = false;

  $scope.onStart = function(event) {
    console.log('STARTING');
    return '1';
  };

  $scope.onStop = function(event) {
    console.log('ENDING');
    return '0';
  };

  $scope.toggleHelp = function() {
    $scope.showHelp = !$scope.showHelp;
    /*var picture = $('.jumbotron img');
    if (picture.is(':visible')) {
      return ($('body').data('chardinJs')).toggle();
    } else {
      return picture.animate({
        height: 250
      }, 600, function() {
        return ($('body').data('chardinJs')).toggle();
      });
    }*/
  };

});
