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
  score();
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
      score();
    }
  }
  tick();
}

//logic to calculate total score at the end -- score() function is not working currently
var correct = 0;
var incorrect = 0;
var unanswered = 0;

function score() {
//score question 1
//   var x = null;
//   if (x === null) {
//     unanswered++;
//   }
//   else (x != null) {
//   var x = document.querySelector('input[name = "question1"]:checked').value;
//   console.log(x);
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

// //score question 2
//   var y = document.querySelector('input[name = "question2"]:checked').value;
//   if (y === "b") {
//     correct++;
//   }
//   else if (y === null) {
//     unanswered++;
//   }
//   else if (y === "a" || y === "c") {
//     incorrect++;
//   };

// //score question 3
//   var z = document.querySelector('input[name = "question3"]:checked').value;
//   if (z === "c") {
//     correct++;
//   }
//   else if (z === null) {
//     unanswered++;
//   }
//   else if (z === "b" || z === "a") {
//     incorrect++;
//   };

// //score question 4
//   var a = document.querySelector('input[name = "question4"]:checked').value;
//   if (a === "b") {
//     correct++;
//   }
//   else if (a === null) {
//     unanswered++;
//   }
//   else if (a === "a" || a === "c") {
//     incorrect++;
//   };

// //score question 5
// var b = document.querySelector('input[name = "question5"]:checked').value;
// if (b === "a") {
//   correct++;
// }
// else if (b === null) {
//   unanswered++;
// }
// else if (b === "b" || b === "c") {
//   incorrect++;
// };

// //score question 6
// var c = document.querySelector('input[name = "question6"]:checked').value;
// if (c === "c") {
//   correct++;
// }
// else if (c === null) {
//   unanswered++;
// }
// else if (c === "a" || c === "b") {
//   incorrect++;
// };

// //score question 7
// var d = document.querySelector('input[name = "question7"]:checked').value;
// if (d === "c") {
//   correct++;
// }
// else if (d === null) {
//   unanswered++;
// }
// else if (d === "a" || d === "b") {
//   incorrect++;
// };
}

//display the score in the divs
function displayScore() {
  $("#scoreRight").html("<h1>You answered " + correct + " correctly! </h1>");
  $("#scoreWrong").html("<h1>You answered " + incorrect + " incorrectly! </h1>");
  $("#scoreUnanswered").html("<h1>You left " + unanswered + " blank. </h1>");
}
});