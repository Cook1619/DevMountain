app.service('mainService', function() {

  //Heisman player data last year

  this.playerData = [{
    id: 1,
    name: 'Marcus Mariota',
    position: 'QB',
    totalYards: 23,
    record: 0.867,
    votes: 2534,
    avatar: "http://www.sportsonearth.com/assets/images/2/2/0/105374220/cuts/Mariota_8yujki9r_ccqwudso.jpg"
  }, {
    id: 2,
    name: 'Melvin Gordon',
    position: 'RB',
    totalYards: 32,
    record: 0.786,
    votes: 1250
  }, {
    id: 3,
    name: 'Amari Cooper',
    position: 'WR',
    totalYards: 32,
    record: 0.857,
    votes: 1023
  }, {
    id: 4,
    name: 'Trevone Boykin',
    position: 'QB',
    totalYards: 32,
    record: 0.923,
    votes: 218
  }, ];

  this.getPlayerData = function(){
    return playerData;
  };


});
