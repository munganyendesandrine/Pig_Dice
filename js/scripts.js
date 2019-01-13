
  
  function Player (playerID){
    this.score = 0;
    this.runningTotal = 0;
    this.turn = 0;
    this.playerID = playerID;
  }
  
  function Referee (){
    this.players = [];
    this.winner = "";
    this.gameover = 0;
    this.dice = 0; 
  }
  