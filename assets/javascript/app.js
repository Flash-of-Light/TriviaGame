$(document).ready(function() { 

  // hide quiz content on pageload
  $("#timer").hide();
  $("#questions").hide();
  $("#submit").hide();
  $("#again").hide();
  
  //hide start button when clicked & start music
  $("#start").on("click", function() {
    $(this).hide();
    // document.getElementById("my_audio").play();
    $("#timer").show();
    $("#questions").show();
    $("#submit").show();
    countdown(120);
  });

  //logic to calculate total score at the end
  var correct = 0;
  var incorrect = 0;
  var unanswered = 0;

//   function score() {
//   // score question 1
  var x = document.querySelector('input[name = "question1"]:checked').checked;
  console.log(x);
//   if (x === "a") {
//     correct++;
//   }
//   // else if (x != "a" && x!= "b" && x != "c") {
//   //   unanswered++;
//   // }
//   else if (x === null) {
//         unanswered++;
//       }
//   else if (x === "b" || x === "c") {
//     incorrect++;
//   };
//   console.log(x);
// }
  
  //display the score in the divs
  function displayScore() {
    $("#scoreRight").append("<h1>You answered " + correct + " correctly! </h1>");
    $("#scoreWrong").append("<h1>You answered " + incorrect + " incorrectly! </h1>");
    $("#scoreUnanswered").append("<h1>You left " + unanswered + " blank. </h1>");
    $("#again").show();
  };

  //hide submit button when clicked
  $("#submit").on("click", function() {
    $(this).remove();
    $("#timer").remove();
    $("#questions").remove();
    $("#again").show();
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
 
  });