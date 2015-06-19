'use strict';

/**
 * @ngdoc function
 * @name dayOutApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the dayOutApp
 */
angular.module('dayOutApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
