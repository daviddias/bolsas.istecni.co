'use strict';
 
angular.module('bolsas', [
  'ng',
  'ngRoute',
  'bolsas.filters',
  'bolsas.services',
  'bolsas.directives',
  'bolsas.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/'           , {templateUrl: 'partials/main/home.html'        , controller: 'home'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);