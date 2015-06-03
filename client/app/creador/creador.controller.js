'use strict';

angular.module('finalitoApp')
  .controller('CreadorCtrl', function ($scope,creador) {
    $scope.message = 'Hello';



    var init=function(){
      creador.getVida(callbackVida);
    };

    var callbackVida=(function(data){
      $scope.vida=data;
    });

    init();

  });
