'use strict';

bolsasController
  .controller('home', function ($scope, $http, Scholarship) {
  
    var scholarships = Scholarship.query();
    console.log(scholarships);


  });
  