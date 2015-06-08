'use strict';

/**
 * @ngdoc function
 * @name dayOutApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dayOutApp
 */
angular.module('dayOutapp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
