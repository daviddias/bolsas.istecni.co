'use strict';
 
var bolsasServices = angular.module('bolsas.services', ['ngResource']);


//
// 
//
bolsasServices.factory('Scholarship', ['$resource',
  function($resource){
    return $resource('scholarships', {}, {
      query: {method:'GET', params:{}, isArray:true}
    });
}]);
