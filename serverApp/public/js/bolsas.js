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
  
    var scholarships = Scholarship.query();
    console.log(scholarships);


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
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvRGF2aWREaWFzL0Ryb3Bib3gvQ29kZS9JU1RlY25pY28vYm9sc2FzLmlzdGVjbmkuY28vY2xpZW50QXBwL2pzL2FwcC5qcyIsIi9Vc2Vycy9EYXZpZERpYXMvRHJvcGJveC9Db2RlL0lTVGVjbmljby9ib2xzYXMuaXN0ZWNuaS5jby9jbGllbnRBcHAvanMvYm9sc2FzLmpzIiwiL1VzZXJzL0RhdmlkRGlhcy9Ecm9wYm94L0NvZGUvSVNUZWNuaWNvL2JvbHNhcy5pc3RlY25pLmNvL2NsaWVudEFwcC9qcy9jb250cm9sbGVycy9pbmRleC5qcyIsIi9Vc2Vycy9EYXZpZERpYXMvRHJvcGJveC9Db2RlL0lTVGVjbmljby9ib2xzYXMuaXN0ZWNuaS5jby9jbGllbnRBcHAvanMvY29udHJvbGxlcnMvbWFpbi9hYm91dC5qcyIsIi9Vc2Vycy9EYXZpZERpYXMvRHJvcGJveC9Db2RlL0lTVGVjbmljby9ib2xzYXMuaXN0ZWNuaS5jby9jbGllbnRBcHAvanMvY29udHJvbGxlcnMvbWFpbi9ob21lLmpzIiwiL1VzZXJzL0RhdmlkRGlhcy9Ecm9wYm94L0NvZGUvSVNUZWNuaWNvL2JvbHNhcy5pc3RlY25pLmNvL2NsaWVudEFwcC9qcy9jb250cm9sbGVycy9tYWluL2luZGV4LmpzIiwiL1VzZXJzL0RhdmlkRGlhcy9Ecm9wYm94L0NvZGUvSVNUZWNuaWNvL2JvbHNhcy5pc3RlY25pLmNvL2NsaWVudEFwcC9qcy9kaXJlY3RpdmVzLmpzIiwiL1VzZXJzL0RhdmlkRGlhcy9Ecm9wYm94L0NvZGUvSVNUZWNuaWNvL2JvbHNhcy5pc3RlY25pLmNvL2NsaWVudEFwcC9qcy9maWx0ZXJzLmpzIiwiL1VzZXJzL0RhdmlkRGlhcy9Ecm9wYm94L0NvZGUvSVNUZWNuaWNvL2JvbHNhcy5pc3RlY25pLmNvL2NsaWVudEFwcC9qcy9zZXJ2aWNlcy5qcyIsIi9Vc2Vycy9EYXZpZERpYXMvRHJvcGJveC9Db2RlL0lTVGVjbmljby9ib2xzYXMuaXN0ZWNuaS5jby9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvaW5zZXJ0LW1vZHVsZS1nbG9iYWxzL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcbiBcbmFuZ3VsYXIubW9kdWxlKCdib2xzYXMnLCBbXG4gICduZycsXG4gICduZ1JvdXRlJyxcbiAgJ2JvbHNhcy5maWx0ZXJzJyxcbiAgJ2JvbHNhcy5zZXJ2aWNlcycsXG4gICdib2xzYXMuZGlyZWN0aXZlcycsXG4gICdib2xzYXMuY29udHJvbGxlcnMnXG5dKS5cbmNvbmZpZyhbJyRyb3V0ZVByb3ZpZGVyJywgZnVuY3Rpb24oJHJvdXRlUHJvdmlkZXIpIHtcbiAgJHJvdXRlUHJvdmlkZXIud2hlbignLycgICAgICAgICAgICwge3RlbXBsYXRlVXJsOiAncGFydGlhbHMvbWFpbi9ob21lLmh0bWwnICAgICAgICAsIGNvbnRyb2xsZXI6ICdob21lJ30pO1xuICAkcm91dGVQcm92aWRlci5vdGhlcndpc2Uoe3JlZGlyZWN0VG86ICcvJ30pO1xufV0pOyIsInZhciBwcm9jZXNzPXJlcXVpcmUoXCJfX2Jyb3dzZXJpZnlfcHJvY2Vzc1wiKTt1cmxfcHJlZml4ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyA/ICdodHRwOi8vYm9sc2FzLnRlY25pLmNvLycgOiAnaHR0cDovL2xvY2FsaG9zdDo4MDgwLyc7XG4gXG5yZXF1aXJlKCcuL2FwcC5qcycpO1xucmVxdWlyZSgnLi9jb250cm9sbGVycycpO1xucmVxdWlyZSgnLi9kaXJlY3RpdmVzLmpzJyk7XG5yZXF1aXJlKCcuL2ZpbHRlcnMuanMnKTtcbnJlcXVpcmUoJy4vc2VydmljZXMuanMnKTsiLCJib2xzYXNDb250cm9sbGVyID0gYW5ndWxhci5tb2R1bGUoJ2JvbHNhcy5jb250cm9sbGVycycsIFtdKTtcbiBcbnJlcXVpcmUoJy4vbWFpbicpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuIFxuYm9sc2FzQ29udHJvbGxlclxuICAuY29udHJvbGxlcignYWJvdXQnLCBmdW5jdGlvbiAoJHNjb3BlKSB7XG4gICAgIFxuICB9KTsiLCIndXNlIHN0cmljdCc7XG5cbmJvbHNhc0NvbnRyb2xsZXJcbiAgLmNvbnRyb2xsZXIoJ2hvbWUnLCBmdW5jdGlvbiAoJHNjb3BlLCAkaHR0cCwgU2Nob2xhcnNoaXApIHtcbiAgXG4gICAgdmFyIHNjaG9sYXJzaGlwcyA9IFNjaG9sYXJzaGlwLnF1ZXJ5KCk7XG4gICAgY29uc29sZS5sb2coc2Nob2xhcnNoaXBzKTtcblxuXG4gIH0pO1xuICAiLCJyZXF1aXJlKCcuL2hvbWUuanMnKTtcbnJlcXVpcmUoJy4vYWJvdXQuanMnKTsiLCIndXNlIHN0cmljdCc7XG4gXG5hbmd1bGFyLm1vZHVsZSgnYm9sc2FzLmRpcmVjdGl2ZXMnLCBbXSlcbiAgLmRpcmVjdGl2ZSgnYXBwVmVyc2lvbicsIFsndmVyc2lvbicsIGZ1bmN0aW9uKHZlcnNpb24pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oc2NvcGUsIGVsbSwgYXR0cnMpIHtcbiAgICAgIGVsbS50ZXh0KHZlcnNpb24pO1xuICAgIH07XG4gIH1dKTsiLCIndXNlIHN0cmljdCc7XG4gXG4gXG5hbmd1bGFyLm1vZHVsZSgnYm9sc2FzLmZpbHRlcnMnLCBbXSkuXG4gIGZpbHRlcignaW50ZXJwb2xhdGUnLCBbJ3ZlcnNpb24nLCBmdW5jdGlvbih2ZXJzaW9uKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHRleHQpIHtcbiAgICAgIHJldHVybiBTdHJpbmcodGV4dCkucmVwbGFjZSgvXFwlVkVSU0lPTlxcJS9tZywgdmVyc2lvbik7XG4gICAgfVxuICB9XSk7IiwiJ3VzZSBzdHJpY3QnO1xuIFxudmFyIGJvbHNhc1NlcnZpY2VzID0gYW5ndWxhci5tb2R1bGUoJ2JvbHNhcy5zZXJ2aWNlcycsIFsnbmdSZXNvdXJjZSddKTtcblxuXG4vL1xuLy8gXG4vL1xuYm9sc2FzU2VydmljZXMuZmFjdG9yeSgnU2Nob2xhcnNoaXAnLCBbJyRyZXNvdXJjZScsXG4gIGZ1bmN0aW9uKCRyZXNvdXJjZSl7XG4gICAgcmV0dXJuICRyZXNvdXJjZSgnc2Nob2xhcnNoaXBzJywge30sIHtcbiAgICAgIHF1ZXJ5OiB7bWV0aG9kOidHRVQnLCBwYXJhbXM6e30sIGlzQXJyYXk6dHJ1ZX1cbiAgICB9KTtcbn1dKTtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxuXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbnByb2Nlc3MubmV4dFRpY2sgPSAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBjYW5TZXRJbW1lZGlhdGUgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICYmIHdpbmRvdy5zZXRJbW1lZGlhdGU7XG4gICAgdmFyIGNhblBvc3QgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICYmIHdpbmRvdy5wb3N0TWVzc2FnZSAmJiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lclxuICAgIDtcblxuICAgIGlmIChjYW5TZXRJbW1lZGlhdGUpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChmKSB7IHJldHVybiB3aW5kb3cuc2V0SW1tZWRpYXRlKGYpIH07XG4gICAgfVxuXG4gICAgaWYgKGNhblBvc3QpIHtcbiAgICAgICAgdmFyIHF1ZXVlID0gW107XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgZnVuY3Rpb24gKGV2KSB7XG4gICAgICAgICAgICBpZiAoZXYuc291cmNlID09PSB3aW5kb3cgJiYgZXYuZGF0YSA9PT0gJ3Byb2Nlc3MtdGljaycpIHtcbiAgICAgICAgICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICBpZiAocXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZm4gPSBxdWV1ZS5zaGlmdCgpO1xuICAgICAgICAgICAgICAgICAgICBmbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdHJ1ZSk7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIG5leHRUaWNrKGZuKSB7XG4gICAgICAgICAgICBxdWV1ZS5wdXNoKGZuKTtcbiAgICAgICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZSgncHJvY2Vzcy10aWNrJywgJyonKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dFRpY2soZm4pIHtcbiAgICAgICAgc2V0VGltZW91dChmbiwgMCk7XG4gICAgfTtcbn0pKCk7XG5cbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn1cblxuLy8gVE9ETyhzaHR5bG1hbilcbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuIl19
