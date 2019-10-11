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
  // REMEMBER TO REVISE TIMER BEFORE FINAL UPLOAD
  //  Start the timer. Use setInterval to start the count here and set the clock to running. Using setTimeout stop the clock after REVISE THIS NUMBER WHEN DONE30seconds
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
// When the game times out run the following code and displays # of correct/wrong answers.
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
  // create loop here based on questions ID length? Maybe this will work not sure. Create anither questions and attaempt to loop through all of them.
  //var results = [];
  //var radio = $( "input[type=radio][name=inlineRadioOptions]:checked" ).val();
  //var radio2 = $( "input[type=radio][name=inlineRadioOptions2]:checked" ).val();
  var radio = $(":input[type=radio]").serializeArray();
  console.log(radio.length);
  console.log(radio);
  for (var i = 0; i < radio.length; i++) {
    console.log(radio[i].value);
    var a = radio[i].value;
    if (a === "1") {
      console.log("You are correct!");
      wins++
      none--;
    }
    if (a === "2") {
      console.log("Wrong!");
      losses++;
      none--;
    }
    if (a === "") {
      console.log("you didnt answer " + none + "questions");
    }
  }
}
