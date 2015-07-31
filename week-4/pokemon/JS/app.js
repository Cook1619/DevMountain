var app = angular.module('app',['ngRoute']);

app.config(function($routeProvider){
  $routeProvider.
    when('/home', {
      templateUrl: 'JS/directive/homeTmpl.html',
      controller: 'mainCtrl'
    })
    .when('/data/:id', {
      templateUrl: '',
      controller: 'dataCtrl'
    })
    .otherwise({
      redirectTo: '/home'
    })
});
