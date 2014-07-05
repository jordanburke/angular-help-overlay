angular.module('app', ['angular-help-overlay']).controller('MainCtrl', function ($scope) {

  $scope.hello = function() {
    var picture = $('.jumbotron img');
    if (picture.is(':visible')) {
      return ($('body').data('chardinJs')).toggle();
    } else {
      return picture.animate({
        height: 250
      }, 600, function() {
        return ($('body').data('chardinJs')).toggle();
      });
    }
  };

});
