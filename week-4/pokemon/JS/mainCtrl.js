app.controller('mainCtrl', function($scope, $routeParams, parseService){

 // var pokeData = function() {
 //   return parseService.pokeData();
 // }
 //
 // $scope.pokeData = pokeData().names;


 $scope.getPokemon = function() {
     parseService.getPokemon().then(function(response) {
       $scope.pokeData = response;
     });
   }
 $scope.getPokemon()

})
