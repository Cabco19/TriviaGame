window.onload = function () {
  $("#start").on("click", start);
  $("#trivia").css("display", "none");
};

//  Global variables
var intervalId;
var time = 60;
var clockRunning = false;
var wins = 0;
var losses = 0;
var none = 10;

function start() {
  //  Start the timer. Use setInterval to start the count here and set the clock to running. Using setTimeout stop the clock after 60 seconds
  time = 60;
  wins = 0;
  losses = 0;
  none = 10;
  $("#timer").html("Time Remaining &ndash; 60 Seconds")
  $("#timesUp").empty();
  $("#correctAns").empty();
  $("#incorrectAns").empty();
  $("#unAnswered").empty();
  $(":input[type=radio]").prop("checked", false);
  $("#trivia").css("display", "inline");
  $("#start").css("display", "none");

  if (!clockRunning) {
    setTimeout(stop, 1000 * 61);
    // for (var i = 0; i < 10; i++) {
    intervalId = setInterval(count, 1000);
    clockRunning = true;
  }
}
// When the game times out run the following code and display # of correct/wrong answers.
function stop() {
  // Stop the timer 
  clearInterval(intervalId);
  clockRunning = false;
  answerLog();
  $("#timesUp").text("Times Up!");
  $("#correctAns").text("Correct Answers:  " + wins);
  $("#incorrectAns").text("Incorrect Answers:  " + losses);
  $("#unAnswered").text("Unanswered:  " + none);
  $("#start").css("display", "inline");
  $("#start").text("Play Again");

  // Hide questions after clock times out
  $("#trivia").css("display", "none");
}

function count() {
  time--;
  if (time > 9) {
    $("#timer").html("Time Remaining &ndash; " + time + " Seconds");
  }
  if (time <= 9) {
    $("#timer").html("Time Remaining&nbsp;&nbsp;&ndash;&nbsp;&nbsp;" + time + "  Seconds");
  }
}

function answerLog() {
  // Loop through the answers array and capture correct and incorrect answers 
  var radio = $(":input[type=radio]").serializeArray();
  
  for (var i = 0; i < radio.length; i++) {
    var a = radio[i].value;
    if (a === "1") {
      wins++
      none--;
    }
    if (a === "2") {
      
      losses++;
      none--;
    }
  }
}
