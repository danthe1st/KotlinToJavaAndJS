'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);


//use kotlin library
console.log(kotlinToJavaAndJS.ktlib.outside())
console.log(kotlinToJavaAndJS.ktlib.KotlinTest.Companion.test())