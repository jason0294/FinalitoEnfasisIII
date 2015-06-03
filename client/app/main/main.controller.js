'use strict';

angular.module('finalitoApp')
  .controller('MainCtrl', function ($scope, $http,main,$location) {
    $scope.awesomeThings = [];

    //$http.get('/api/things').success(function(awesomeThings) {
     // $scope.awesomeThings = awesomeThings;
    //});

    var init=function(){
      main.getCountries(callbackCountries);
    };

    var callbackCountries=function(data){
      $scope.countries=data;
    };


    $scope.modalito=function(){
      $location.path('components/modal/modal.html');
    };

    init();

  });
