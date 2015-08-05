app.controller('mainCtrl', function($scope, mainService){

  $scope.getPlayerData = function() {
    $scope.playerData = mainService.getPlayerData();
  };
  
  $scope.getPlayerData();
  console.log($scope.playerData);

});
