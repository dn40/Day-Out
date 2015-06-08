  'use strict';

  /* Controllers */

  var myMod = angular.module('dayOutapp', []);

  myMod.controller('BeachesListCtrl', ['$scope', '$http',

      function($scope, $http) {
          $http.get('JSONfiles/beaches.json').success(function(data) {
              $scope.beaches = data;
              console.table($scope.beaches);
          });
  }]);

  myMod.controller('NightlifeListCtrl', ['$scope', '$http',

      function($scope, $http) {
          $http.get('JSONfiles/nightlife.json').success(function(data) {
              $scope.nightlifeplaces = data;
              console.table($scope.nightlifeplaces);
          });
  }]);

  myMod.controller('RestaurantsListCtrl', ['$scope', '$http',

      function($scope, $http) {
          $http.get('JSONfiles/restaurant.json').success(function(data) {
              $scope.restaurants = data;
              console.table($scope.restaurants);
          });
  }]);
