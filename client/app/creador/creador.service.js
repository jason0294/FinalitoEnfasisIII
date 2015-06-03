'use strict';

angular.module('finalitoApp')
  .service('creador', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function

  var self=this;


    self.getVida=function(callback){
    $http.get('http://greatsource.co/futuro/API/getAll?cedula=1017218836').
      success(function(data){
        callback(data)}).error(function() {
        alert("error");
        });

    };


  });
