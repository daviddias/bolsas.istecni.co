'use strict';

bolsasController
  .controller('home', function ($scope, $http, Scholarship) {
  
    $scope.scholarships = Scholarship.query();

  });
  