(function(exports) {
    'use strict';

    var fatomic = angular.module('fatomic', [
        'ngRoute',
        'fatomicControllers',
    ]);

    fatomic.config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'partials/home.html'
	    }).
            when('/download', {
                templateUrl: 'partials/download.html'
            }).
            otherwise({
                redirectTo: 'partials/unknown.html',
            });
    }]);

})(window);
