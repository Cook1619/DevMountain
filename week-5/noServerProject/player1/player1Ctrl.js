app.controller('player1Ctrl', function($scope, $routeParams, mainService){
  $scope.data = mainService.playerData[0]
});
