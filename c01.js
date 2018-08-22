


$(document).ready(function () {
var playerOneTurn = true;
let playerOneScore = 1;
let playerTwoScore = 1;
let boardArr = ['<i class="fa fa-reddit"></i>', '<i class="fa fa-html5"></i>', '<i class="fa fa-slack"></i>', '<i class="fa fa-linux"></i>', '<i class="fa fa-windows"></i>', '<i class="fa fa-google"></i> ', '<i class="fa fa-amazon"></i>', '<i class="fa fa-facebook-square"></i>', '<i class="fa fa-instagram"></i>', '<i class="fa fa-apple"></i>'
];
var targetIcon = boardArr[Math.floor(10 * Math.random())];
 
    
    $("#startGame").on("click", function () {
    var timeLeft = 30;
    var timerId = setInterval(countdown, 1000);
        DrawBoard();
    function countdown() {
  if (timeLeft == 0) {
    clearTimeout(timerId);
  } else {
      if (timeLeft > 1){
          $(".timer").html(timeLeft + ' seconds remaining');
      } else {
          $(".timer").html(timeLeft + ' second remaining');
      }
    timeLeft--;
  }
}
    });
    
    $("#restartGame").on("click", function () {
       DrawBoard(); 
    });
    
    $(".board").on("click", "td", function (e) {

    if ((this).innerHTML == targetIcon) {
        $(this).addClass("selected");
        if (playerOneTurn == true) {
            $("#scoreone").html(playerOneScore);
            playerOneScore++;
            console.log(playerOneScore);
        } else {
            $("#scoretwo").html(playerTwoScore);
            playerTwoScore++;
            console.log(playerTwoScore);
        }
        //fix this, its not redrawing the target icon after the oops message
    } else {
        $("#turn").html("Oops! That didn't match!");
        setTimeout(function () {
            DrawBoard();
        }, 2000);
        playerOneTurn = false;
    }
    });
    
function DrawBoard() {
var playerOne = $("#playerOneName").val();
var playerTwo = $("#playerTwoName").val();
    let mytable = "<table class='mytable'><tbody>";


    $("#playeronescore").html("<p>" + playerOne + "'s Score: </p>");
    console.log(playerOne);
    $("#playertwoscore").html("<p>" + playerTwo + "'s Score: </p>");
    console.log(playerTwo);

    for (var i = 1; i < 11; i++) {
        mytable += "<tr>";
        for (var j = 1; j < 11; j++) {
            mytable += "<td>" + boardArr[Math.floor(10 * Math.random())] + "</td>";
        }
    }
    mytable += "</tbody></table>";
    $("#turn").html("Find the matching icon!" + targetIcon);
    $(".board").html(mytable);
};
    
function ResetPlayers(){
    $("#playerOneName").val("");
    $("#playerTwoName").val("");
};
    

});



