
  
 /* function Player (playerID){
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
  
  // probability section if the play scores a 1


Referee.prototype.switchPlayer =  function (){
    if (this.players[0].turn === 1){
      this.players[0].turn = 0;
      this.players[1].turn = 1;
  
    }else if (this.players[1].turn === 1){
      this.players[0].turn = 1;
      this.players[1].turn = 0;
    }
  
  }
  Referee.prototype.runningTotal = function (player) {
    player.score += player.runningTotal;
    player.runningTotal = 0;
  }
  // random number selection section


Referee.prototype.throw = function (){
    var result = Math.floor((Math.random() * 6) + 1);    //random method
    if(this.gameover === 0){
      this.dice = result;
    }
    if (this.players[0].turn === 1) {
      if (result !=1){
        this.players[0].runningTotal += result;
      }else {
        this.players[0].runningTotal = 0;
        this.switchPlayer();
      }
  
    }else if (this.players[1].turn === 1) {
      if (result !=1){
        this.players[1].runningTotal += result;
      }else {
        this.players[1].runningTotal = 0;
        this.switchPlayer();
      }
    }
  };
  // section on the hold key


Referee.prototype.hold = function (){
    if (this.players[0].turn === 1){
      this.runningTotal(this.players[0]);
      this.switchPlayer();
  
    } else if (this.players[1].turn === 1){
      this.runningTotal(this.players[1]);
      this.switchPlayer();
  
    }
  }
  
  Referee.prototype.pickPlayer = function (){
    this.players[0].turn = 1;
  }
// declaration of the winner


Referee.prototype.checkGame = function (){
    if (this.players[0].score >= 100){
      this.players[1].turn = 0;
      this.players[0].turn = 0;
      this.winner = "Player 1 ";
      this.gameover = 1;
    }else if (this.players[1].score >= 100){
      this.players[1].turn = 0;
      this.players[0].turn = 0;
      this.winner = "Player 2 ";
      this.gameover = 1;
    }
  }  
  
  //interface functions
function switchClass(player1, player2){
    if (player1.turn === 1){
      $("div.player1").addClass("highlight");
      $("div.player2").removeClass("highlight");
    }else if (player2.turn === 1){
      $("div.player1").removeClass("highlight");
      $("div.player2").addClass("highlight");
  
    }
  }
  function showScore(player1, player2){
    $("#player1RunningTotal").text("Running Total: " + player1.runningTotal);
    $("#player2RunningTotal").text("Running Total: " + player2.runningTotal);
  
    $("#player1Total").text("Total: " + player1.score);
    $("#player2Total").text("Total: " + player2.score);
  }

 // function showDice (dice){
 //   if (dice >= 1){
   //   $("img").attr("src","img/" + dice + ".png").hide().fadeIn();
 //   }
  
 // }
  
  
  //user interface
  
  $(document).ready(function (){
   // var gameChoice = $('input:radio[name=gameChoice]:checked').val();
    var player1 = new Player ("mister");
    var player2 = new Player (gameChoice);
    var toelTheReferee = new Referee ();
  
  
    toelTheReferee.players.push(player1, player2);
    toelTheReferee.pickPlayer();
  
  
  
  //  $("#gameChoice").click(function (){
     // gameChoice = $('input:radio[name=gameChoice]:checked').val();
      if (gameChoice === "ai"){
        // console.log("ai");
        toelTheReferee.players[1].playerID = "ai";
  
  
  
      }
    //  $(this).parent().parent().fadeOut(700, function (){  //parent() method traverses to the immediate parent of each of these elements
    //    $("#twoPlayer").fadeIn();
    //  });
    });
  
  
   // showing of the hold and roll section....play section
  
  
    setInterval(function (){   //setInterval() method will be used to time events
      if (player2.playerID === "ai" && player2.turn ===1 ){
        if (player2.runningTotal <= 15){
            toelTheReferee.throw();     //Execution of the current function will stop (the statements after throw won't be executed
            $("#hold").hide();
            $("#roll").hide();
        }else {
          toelTheReferee.hold();
          $("#hold").fadeIn();
          $("#roll").fadeIn();
        }
        if(player2.turn ===0){
          $("#hold").fadeIn();
          $("#roll").fadeIn();
        }
  
  
  // section of the declarion of the winner
  
        toelTheReferee.checkGame();
        if (toelTheReferee.gameover === 1){
          $("#winner").show().text(toelTheReferee.winner + "wins!!!");
        }
       // showDice(toelTheReferee.dice);
        showScore(player1, player2);
        switchClass(player1, player2);
  
      }
  
    }, 900);
  
  // press roll section to run the random number
  
    $("#roll").click(function (){
      toelTheReferee.checkGame();
      toelTheReferee.throw();
  
  
      showDice(toelTheReferee.dice);
      showScore(player1, player2);
      switchClass(player1, player2);
  
      if (toelTheReferee.gameover === 1){
        $("#winner").show().text(toelTheReferee.winner + "wins!!!");
      }
  
  
    });
  
   // press hold to pass section
  
    $("#hold").click(function (){
  
      toelTheReferee.hold();
      showScore(player1, player2);
      toelTheReferee.checkGame();
  
      switchClass(player1, player2);
      showDice(player1, player2);
  
      if (toelTheReferee.gameover === 1){
        $("#winner").show().text(toelTheReferee.winner + "wins!!!");
      }
    });
  //});
  */
 //Global Variables
var player1, player2;
//Back-End Logic
//Constructor function for a player
function Player(name, turnTotal, diceRoll, overallScore, active) {
    this.name = name;
    this.diceRoll = 0;
    this.turnTotal = 0;
    this.overallScore = 0;
    this.active = active;
}
//Function to disable and enable gaming areas according to which player is active.
function activeUser() {
    if (player1.active === true && player2.active === false) {
        $('.player1Area').children().prop('disabled', false);
        $('.player1Area').removeClass('disableGamingArea');
        $('.player2Area').children().prop('disabled', true);
        $('.player2Area').addClass('disableGamingArea');
    } else {
        $('.player1Area').children().prop('disabled', true);
        $('.player1Area').addClass('disableGamingArea');
        $('.player2Area').children().prop('disabled', false);
        $('.player2Area').removeClass('disableGamingArea');
    }
};
//Funtion on what is to happen when the dice is rolled.
Player.prototype.roll = function () {
    var randomNo = Math.floor((Math.random() * 6) + 1); //Random no generator from 1-6.
    this.diceRoll = randomNo;
    activeUser();
    if (randomNo === 1) {
        this.turnTotal = 0;
        this.diceRoll = 1;
        if (this.active === player1.active) { //disable and enable gaming areas when dice is a 1 according to which player is active.
            player1.active = false;
            player2.active = true;
            $('.player1Area').children().prop('disabled', true);
            $('.player1Area').addClass('disableGamingArea');
            $('.player2Area').children().prop('disabled', false);
            $('.player2Area').removeClass('disableGamingArea');
        } else if (this.active === player2.active) {
            player2.active = false;
            player1.active = true;
            $('.player2Area').children().prop('disabled', true);
            $('.player2Area').addClass('disableGamingArea');
            $('.player1Area').children().prop('disabled', false);
            $('.player1Area').removeClass('disableGamingArea');
        } else {
            console.log("not working");
        }
        return alert("Oops you got a 1. Your turn is over!");
    } else {
        this.turnTotal += randomNo;
    };
    return this.diceRoll;
};
//Function on what is to happen when a player holds the game.
Player.prototype.hold = function () {
    activeUser();
    this.overallScore += this.turnTotal;
    if (this.overallScore >= 100) {
        alert("Game Over. You win!!!!");
        resetFields();
        alert('To play with a new partner click New Game.')

    } else {
        return false;
    }
    console.log('the turn total is: ' + this.turnTotal);
    return this.overallScore;
};
//Function to reset the form input fields, re-enable the buttons, remove the opacity from the gaming area and reset the scores to 0.
function resetFields() {
    $("input#player1Name").val("");
    $("input#player2Name").val("");
    $('.player1Area').children().prop('disabled', false);
    $('.player2Area').children().prop('disabled', false);
    $('.player1Area').removeClass('disableGamingArea');
    $('.player2Area').removeClass('disableGamingArea');
    var thePlayers = [player1, player2];
    thePlayers.forEach(function (player) {
        player.diceRoll = 0;
        player.turnTotal = 0;
        player.overallScore = 0;
    })
    var outputs = [$('.diceRoll1'), $('.turnScore1'), $('.overallScore1'), $('.diceRoll2'), $('.turnScore2'), $('.overallScore2')];
    outputs.forEach(function (output) {
        output.text(0);
    })

};
//Front End Logic
$(document).ready(function () {
    $("#rulesHeader").click(function () { //Makes the 'Rules' title clickeable and the rules themselves hideable.
        $("#rulesDefinitions").toggle();
    });
    //Actions when player enters name
    $("#playerNames").submit(function (event) {
        event.preventDefault();
        $("#rulesDefinitions").hide();
        $("form").hide();
        $(".newGame").show();
        $(".newGame").click(function () { //Makes the 'New Game' title clickeable and the form reappear.
            $("form").show();
            $('#gamingArea').hide();
            $(".newGame").hide();
            resetFields();
        });
        $('#gamingArea').show();
        //Store the players names in variables.
        var gamer1 = $("#player1Name").val();
        var gamer2 = $("#player2Name").val();
        //Put the names into an object using the constructor Players.
        player1 = new Player(gamer1);
        player2 = new Player(gamer2);
        //Output the names into each appropriate section
        $(".player1NameOutput").text(player1.name);
        $(".player2NameOutput").text(player2.name);
        resetFields(); //Clear the form input fields
    });
    //Display dice roll number and turn total when the roll button is clicked
    $('.roll1').click(function (event) { //roll button for player1
        event.preventDefault();
        //Activate Gaming Area
        player1.active = true;
        player2.active = false;
        player1.roll(); //call the function to generate random numbers
        $('.diceRoll1').text(player1.diceRoll); //display the rolled dice number
        $('.turnScore1').text(player1.turnTotal); //display the turn score (temporary score)
    });
    $('.roll2').click(function (event) { //roll button for player2
        event.preventDefault();
        //Activate Gaming Area
        player2.active = true;
        player1.active = false;
        player2.roll(); //call the function to generate random numbers
        $('.diceRoll2').text(player2.diceRoll); //display the rolled dice number
        $('.turnScore2').text(player2.turnTotal); //display the turn score (temporary score)
    });

    //Display overall score when the hold button is clicked
    $('.hold1').click(function (event) { //hold button for player1
        event.preventDefault();
        //Deactivate Gaming Area
        player1.active = false;
        player2.active = true;
        player1.hold(); //call the function to add the turn score to the overall score
        $('.overallScore1').text(player1.overallScore); //display the overall score
        //Clear dice roll and turn score
        player1.diceRoll = 0;
        player1.turnTotal = 0;
        $('.diceRoll1').text(player1.diceRoll);
        $('.turnScore1').text(player1.turnTotal);
    });
    $('.hold2').click(function (event) { //hold button for player2
        event.preventDefault();
        //Deactivate Gaming Area
        player2.active = false;
        player1.active = true;
        player2.hold(); //call the function to add the turn score to the overall score
        $('.overallScore2').text(player2.overallScore); //display the overall score
        //Clear turn score and total score
        player2.diceRoll = 0;
        player2.turnTotal = 0;
        $('.diceRoll2').text(player2.diceRoll);
        $('.turnScore2').text(player2.turnTotal);
    });

});
