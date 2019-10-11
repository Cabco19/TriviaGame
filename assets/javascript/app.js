window.onload = function () {
  $("#start").on("click", start);
  $("#trivia").css("display", "none");
  $("#reset").css("display", "none");
};

//  Global variables
var intervalId;
var time = 10;
var clockRunning = false;
var wins = 0;
var losses = 0;
var none = 10;

function start() {
  // REMEMBER TO REVISE TIMER BEFORE FINAL UPLOAD
  //  Start the timer. Use setInterval to start the count here and set the clock to running. Using setTimeout stop the clock after REVISE THIS NUMBER WHEN DONE30seconds
  time = 10;
  wins = 0;
  losses = 0;
  none = 10;
  $("#timesUp").empty();
  $("#correctAns").empty();
  $("#incorrectAns").empty();
  $("#unAnswered").empty();
  $(":input[type=radio]").prop("checked", false);
  $("#trivia").css("display", "inline");

  if (!clockRunning) {
    setTimeout(stop, 1000 * 11);
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


  // Hide questions after clock times out
  $("#trivia").css("display", "none");

  $("#reset").css("display", "inline", start);


}

function count() {
  time--;
  if (time > 9) {
    $("#timer").text("Time Remaining: " + time + " Seconds");
  }
  if (time <= 9) {
    $("#timer").html("Time Remaining:&nbsp;&nbsp;&nbsp;" + time + "  Seconds");
  }
}

function reset() {
  time = 30;
  wins = 0;
  losses = 0;
  none = 10;
  //  Changes the "display" div to "30 seconds" when game restarts
  $("#display").text("40 Seconds");
  $("#trivia").css("display", "inline");
  $("#start").on("click", start);
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
