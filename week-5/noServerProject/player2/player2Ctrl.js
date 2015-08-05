app.controller('player2Ctrl', function($scope, $routeParams, mainService){
  $scope.data = mainService.playerData[1]
});
