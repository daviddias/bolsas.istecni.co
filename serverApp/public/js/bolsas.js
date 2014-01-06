(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}],2:[function(require,module,exports){
var process=require("__browserify_process");url_prefix = process.env.NODE_ENV === 'production' ? 'http://bolsas.tecni.co/' : 'http://localhost:8080/';
 
require('./app.js');
require('./controllers');
require('./directives.js');
require('./filters.js');
require('./services.js');
},{"./app.js":1,"./controllers":3,"./directives.js":7,"./filters.js":8,"./services.js":9,"__browserify_process":10}],3:[function(require,module,exports){
bolsasController = angular.module('bolsas.controllers', []);
 
require('./main');

},{"./main":6}],4:[function(require,module,exports){
'use strict';
 
bolsasController
  .controller('about', function ($scope) {
     
  });
},{}],5:[function(require,module,exports){
'use strict';

bolsasController
  .controller('home', function ($scope, $http, Scholarship) {
  
    $scope.scholarships = Scholarship.query();

  });
  
},{}],6:[function(require,module,exports){
require('./home.js');
require('./about.js');
},{"./about.js":4,"./home.js":5}],7:[function(require,module,exports){
'use strict';
 
angular.module('bolsas.directives', [])
  .directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);
},{}],8:[function(require,module,exports){
'use strict';
 
 
angular.module('bolsas.filters', []).
  filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    }
  }]);
},{}],9:[function(require,module,exports){
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

},{}],10:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};

process.nextTick = (function () {
    var canSetImmediate = typeof window !== 'undefined'
    && window.setImmediate;
    var canPost = typeof window !== 'undefined'
    && window.postMessage && window.addEventListener
    ;

    if (canSetImmediate) {
        return function (f) { return window.setImmediate(f) };
    }

    if (canPost) {
        var queue = [];
        window.addEventListener('message', function (ev) {
            if (ev.source === window && ev.data === 'process-tick') {
                ev.stopPropagation();
                if (queue.length > 0) {
                    var fn = queue.shift();
                    fn();
                }
            }
        }, true);

        return function nextTick(fn) {
            queue.push(fn);
            window.postMessage('process-tick', '*');
        };
    }

    return function nextTick(fn) {
        setTimeout(fn, 0);
    };
})();

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];

process.binding = function (name) {
    throw new Error('process.binding is not supported');
}

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};

},{}]},{},[2])
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvRGF2aWREaWFzL0Ryb3Bib3gvQ29kZS9JU1RlY25pY28vYm9sc2FzLmlzdGVjbmkuY28vY2xpZW50QXBwL2pzL2FwcC5qcyIsIi9Vc2Vycy9EYXZpZERpYXMvRHJvcGJveC9Db2RlL0lTVGVjbmljby9ib2xzYXMuaXN0ZWNuaS5jby9jbGllbnRBcHAvanMvYm9sc2FzLmpzIiwiL1VzZXJzL0RhdmlkRGlhcy9Ecm9wYm94L0NvZGUvSVNUZWNuaWNvL2JvbHNhcy5pc3RlY25pLmNvL2NsaWVudEFwcC9qcy9jb250cm9sbGVycy9pbmRleC5qcyIsIi9Vc2Vycy9EYXZpZERpYXMvRHJvcGJveC9Db2RlL0lTVGVjbmljby9ib2xzYXMuaXN0ZWNuaS5jby9jbGllbnRBcHAvanMvY29udHJvbGxlcnMvbWFpbi9hYm91dC5qcyIsIi9Vc2Vycy9EYXZpZERpYXMvRHJvcGJveC9Db2RlL0lTVGVjbmljby9ib2xzYXMuaXN0ZWNuaS5jby9jbGllbnRBcHAvanMvY29udHJvbGxlcnMvbWFpbi9ob21lLmpzIiwiL1VzZXJzL0RhdmlkRGlhcy9Ecm9wYm94L0NvZGUvSVNUZWNuaWNvL2JvbHNhcy5pc3RlY25pLmNvL2NsaWVudEFwcC9qcy9jb250cm9sbGVycy9tYWluL2luZGV4LmpzIiwiL1VzZXJzL0RhdmlkRGlhcy9Ecm9wYm94L0NvZGUvSVNUZWNuaWNvL2JvbHNhcy5pc3RlY25pLmNvL2NsaWVudEFwcC9qcy9kaXJlY3RpdmVzLmpzIiwiL1VzZXJzL0RhdmlkRGlhcy9Ecm9wYm94L0NvZGUvSVNUZWNuaWNvL2JvbHNhcy5pc3RlY25pLmNvL2NsaWVudEFwcC9qcy9maWx0ZXJzLmpzIiwiL1VzZXJzL0RhdmlkRGlhcy9Ecm9wYm94L0NvZGUvSVNUZWNuaWNvL2JvbHNhcy5pc3RlY25pLmNvL2NsaWVudEFwcC9qcy9zZXJ2aWNlcy5qcyIsIi9Vc2Vycy9EYXZpZERpYXMvRHJvcGJveC9Db2RlL0lTVGVjbmljby9ib2xzYXMuaXN0ZWNuaS5jby9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvaW5zZXJ0LW1vZHVsZS1nbG9iYWxzL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuIFxuYW5ndWxhci5tb2R1bGUoJ2JvbHNhcycsIFtcbiAgJ25nJyxcbiAgJ25nUm91dGUnLFxuICAnYm9sc2FzLmZpbHRlcnMnLFxuICAnYm9sc2FzLnNlcnZpY2VzJyxcbiAgJ2JvbHNhcy5kaXJlY3RpdmVzJyxcbiAgJ2JvbHNhcy5jb250cm9sbGVycydcbl0pLlxuY29uZmlnKFsnJHJvdXRlUHJvdmlkZXInLCBmdW5jdGlvbigkcm91dGVQcm92aWRlcikge1xuICAkcm91dGVQcm92aWRlci53aGVuKCcvJyAgICAgICAgICAgLCB7dGVtcGxhdGVVcmw6ICdwYXJ0aWFscy9tYWluL2hvbWUuaHRtbCcgICAgICAgICwgY29udHJvbGxlcjogJ2hvbWUnfSk7XG4gICRyb3V0ZVByb3ZpZGVyLm90aGVyd2lzZSh7cmVkaXJlY3RUbzogJy8nfSk7XG59XSk7IiwidmFyIHByb2Nlc3M9cmVxdWlyZShcIl9fYnJvd3NlcmlmeV9wcm9jZXNzXCIpO3VybF9wcmVmaXggPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nID8gJ2h0dHA6Ly9ib2xzYXMudGVjbmkuY28vJyA6ICdodHRwOi8vbG9jYWxob3N0OjgwODAvJztcbiBcbnJlcXVpcmUoJy4vYXBwLmpzJyk7XG5yZXF1aXJlKCcuL2NvbnRyb2xsZXJzJyk7XG5yZXF1aXJlKCcuL2RpcmVjdGl2ZXMuanMnKTtcbnJlcXVpcmUoJy4vZmlsdGVycy5qcycpO1xucmVxdWlyZSgnLi9zZXJ2aWNlcy5qcycpOyIsImJvbHNhc0NvbnRyb2xsZXIgPSBhbmd1bGFyLm1vZHVsZSgnYm9sc2FzLmNvbnRyb2xsZXJzJywgW10pO1xuIFxucmVxdWlyZSgnLi9tYWluJyk7XG4iLCIndXNlIHN0cmljdCc7XG4gXG5ib2xzYXNDb250cm9sbGVyXG4gIC5jb250cm9sbGVyKCdhYm91dCcsIGZ1bmN0aW9uICgkc2NvcGUpIHtcbiAgICAgXG4gIH0pOyIsIid1c2Ugc3RyaWN0JztcblxuYm9sc2FzQ29udHJvbGxlclxuICAuY29udHJvbGxlcignaG9tZScsIGZ1bmN0aW9uICgkc2NvcGUsICRodHRwLCBTY2hvbGFyc2hpcCkge1xuICBcbiAgICAkc2NvcGUuc2Nob2xhcnNoaXBzID0gU2Nob2xhcnNoaXAucXVlcnkoKTtcblxuICB9KTtcbiAgIiwicmVxdWlyZSgnLi9ob21lLmpzJyk7XG5yZXF1aXJlKCcuL2Fib3V0LmpzJyk7IiwiJ3VzZSBzdHJpY3QnO1xuIFxuYW5ndWxhci5tb2R1bGUoJ2JvbHNhcy5kaXJlY3RpdmVzJywgW10pXG4gIC5kaXJlY3RpdmUoJ2FwcFZlcnNpb24nLCBbJ3ZlcnNpb24nLCBmdW5jdGlvbih2ZXJzaW9uKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHNjb3BlLCBlbG0sIGF0dHJzKSB7XG4gICAgICBlbG0udGV4dCh2ZXJzaW9uKTtcbiAgICB9O1xuICB9XSk7IiwiJ3VzZSBzdHJpY3QnO1xuIFxuIFxuYW5ndWxhci5tb2R1bGUoJ2JvbHNhcy5maWx0ZXJzJywgW10pLlxuICBmaWx0ZXIoJ2ludGVycG9sYXRlJywgWyd2ZXJzaW9uJywgZnVuY3Rpb24odmVyc2lvbikge1xuICAgIHJldHVybiBmdW5jdGlvbih0ZXh0KSB7XG4gICAgICByZXR1cm4gU3RyaW5nKHRleHQpLnJlcGxhY2UoL1xcJVZFUlNJT05cXCUvbWcsIHZlcnNpb24pO1xuICAgIH1cbiAgfV0pOyIsIid1c2Ugc3RyaWN0JztcbiBcbnZhciBib2xzYXNTZXJ2aWNlcyA9IGFuZ3VsYXIubW9kdWxlKCdib2xzYXMuc2VydmljZXMnLCBbJ25nUmVzb3VyY2UnXSk7XG5cblxuLy9cbi8vIFxuLy9cbmJvbHNhc1NlcnZpY2VzLmZhY3RvcnkoJ1NjaG9sYXJzaGlwJywgWyckcmVzb3VyY2UnLFxuICBmdW5jdGlvbigkcmVzb3VyY2Upe1xuICAgIHJldHVybiAkcmVzb3VyY2UoJ3NjaG9sYXJzaGlwcycsIHt9LCB7XG4gICAgICBxdWVyeToge21ldGhvZDonR0VUJywgcGFyYW1zOnt9LCBpc0FycmF5OnRydWV9XG4gICAgfSk7XG59XSk7XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcblxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5wcm9jZXNzLm5leHRUaWNrID0gKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY2FuU2V0SW1tZWRpYXRlID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAmJiB3aW5kb3cuc2V0SW1tZWRpYXRlO1xuICAgIHZhciBjYW5Qb3N0ID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAmJiB3aW5kb3cucG9zdE1lc3NhZ2UgJiYgd2luZG93LmFkZEV2ZW50TGlzdGVuZXJcbiAgICA7XG5cbiAgICBpZiAoY2FuU2V0SW1tZWRpYXRlKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoZikgeyByZXR1cm4gd2luZG93LnNldEltbWVkaWF0ZShmKSB9O1xuICAgIH1cblxuICAgIGlmIChjYW5Qb3N0KSB7XG4gICAgICAgIHZhciBxdWV1ZSA9IFtdO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGZ1bmN0aW9uIChldikge1xuICAgICAgICAgICAgaWYgKGV2LnNvdXJjZSA9PT0gd2luZG93ICYmIGV2LmRhdGEgPT09ICdwcm9jZXNzLXRpY2snKSB7XG4gICAgICAgICAgICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgaWYgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZuID0gcXVldWUuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgZm4oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRydWUpO1xuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBuZXh0VGljayhmbikge1xuICAgICAgICAgICAgcXVldWUucHVzaChmbik7XG4gICAgICAgICAgICB3aW5kb3cucG9zdE1lc3NhZ2UoJ3Byb2Nlc3MtdGljaycsICcqJyk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHRUaWNrKGZuKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZm4sIDApO1xuICAgIH07XG59KSgpO1xuXG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59XG5cbi8vIFRPRE8oc2h0eWxtYW4pXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbiJdfQ==
