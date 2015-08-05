var app = angular.module('heismanWatch', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider.
    when('/main', {
      templateUrl: 'mainTmpl.html',
      controller: 'mainCtrl'
    })
    .when('/player1', {
      templateUrl: 'player1/player1Tmpl.html',
      controller: 'player1Ctrl'
    })
    .when('/player2', {
      templateUrl: 'player2/player2Tmpl.html',
      controller: 'player2Ctrl'
    })
    .when('/player3', {
      templateUrl: 'player3/player3Tmpl.html',
      controller: 'player3Ctrl'
    })
    .when('/player4', {
      templateUrl: 'player4/player4Tmpl.html',
      controller: 'player4Ctrl'
    })
    .otherwise({
      redirectTo: '/main'
    })
})
