$(document).ready(function() { 

// janky coding to hide div and questions -- i get FOUC using this
$("#timer").hide();
$("#questions").hide();
$("#submit").hide();

//hide start button when clicked & start music
$("#start").on("click", function() {
  $(this).hide();
  document.getElementById("my_audio").play();
  $("#timer").show();
  $("#questions").show();
  $("#submit").show();
  countdown(120);
});

//hide submit button when clicked
$("#submit").on("click", function() {
  $("#timer").hide();
  $("#questions").hide();
  $(this).hide();
  // score();
  displayScore();
});

// a timer pulled from stack overflow that will start to count down from 120 
function countdown(seconds) {
  seconds = parseInt(sessionStorage.getItem("seconds"))||seconds;

  function tick() {
    seconds--; 
    sessionStorage.setItem("seconds", seconds)
    var counter = document.getElementById("timer");
    var current_minutes = parseInt(seconds/60);
    var current_seconds = seconds % 60;
    counter.innerHTML = "Warning: Imperial Fleet Arrives in: " + current_minutes + ":" + (current_seconds < 10 ? "0" : "") + current_seconds;
    if( seconds > 0 ) {
      setTimeout(tick, 1000);
    } 
    else if ( seconds < 1) {
      displayScore();
      $("#timer").hide();
      $("#questions").hide();
      $("#submit").hide();
      // score();
    }
  }
  tick();
}

//logic to calculate total score at the end -- score() function is not working currently
var correct = 0;
var incorrect = 0;
var unanswered = 0;
function score() {
  var x = document.querySelector('input[name = "question1"]:checked').value;
  console.log(x);
//   if (x === ) {
//     correct++;
//   }
//   else {
//     incorrect++;
//   }
}

//display the score in the divs
function displayScore() {
  $("#scoreRight").html("<h1>You answered " + correct + " correctly! </h1>");
  $("#scoreWrong").html("<h1>You answered " + incorrect + " incorrectly! </h1>");
  $("#scoreUnanswered").html("<h1>You left " + unanswered + " blank. </h1>");
}

});