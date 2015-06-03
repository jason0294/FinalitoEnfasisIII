'use strict';

angular.module('finalitoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('creador', {
        url: '/creador',
        templateUrl: 'app/creador/creador.html',
        controller: 'CreadorCtrl'
      });
  });