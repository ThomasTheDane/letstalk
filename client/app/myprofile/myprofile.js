'use strict';

angular.module('letsTalkApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/myprofile', {
        templateUrl: 'app/myprofile/myprofile.html',
        controller: 'MyprofileCtrl'
      });
  });
