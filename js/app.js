"use strict";

let i; //Counter for loop
let userQuestion;
let userCounter = 0; //Counter for correct answers
let myAnswer;
let userAnswer;
let userName;
let finalMessage1;
let finalMessage2;

userName = prompt(
  "I'm pleased to allow you to introduce yourself. What's your name, visitor?"
);

window.alert(" Welcome to my web page, " + userName + "!");

for (i = 1; i <= 5; i++) {
  switch (i) {
    case 1:
      userQuestion = "Do I know how many roads a man must walk down?";
      myAnswer = "y";
      break;
    case 2:
      userQuestion = "Was my first computer a ZX Spectrum?";
      myAnswer = "n";
      break;
    case 3:
      userQuestion = "Will I be annoyed if you misspell my name?";
      myAnswer = "n";
      break;
    case 4:
      userQuestion = "Can I climb every mountain?";
      myAnswer = "n";
      break;
    case 5:
      userQuestion =
        "Have I made the answers to all of these questions the same to make the programming easier?";
      myAnswer = "n";
      break;
    default:
      console.log("Error in 1st switch statement");
  }

  let userAnswer = prompt(userQuestion);
  userAnswer = userAnswer.toLowerCase();

  //console.log(userAnswer);

  if (userAnswer == "yes") {
    userAnswer = "y";
  } else if (userAnswer == "no") {
    userAnswer = "n";
  }
  console.log(userAnswer);

  if (userAnswer == "y" || userAnswer == "n") {
    if (userAnswer == myAnswer) {
      //console.log("Right!");
      userCounter++;
      window.alert("Right!");
    } else {
      //console.log("Wrong");
      window.alert("Wrong!");
    }
  } else {
    //console.log("Please answer yes or no!");
    window / alert("Please answer yes or no!");
    i = i - 1;
  }
  //console.log(i);
  //console.log(userCounter);
}
document.write(" You made " + userCounter + "correct answers");

switch (userCounter) {
  case 0:
    finalMessage1 = "You're a terrible guesser, ";
    finalMessage2 = ", but come back any time.";
    break;
  case 1:
    finalMessage1 = "You narrowly avoided disaster, ";
    finalMessage2 = ". You're my kind of person.";
    break;
  case 2:
    finalMessage1 = "Could have been worse, ";
    finalMessage2 = ". Not by much, though!";
    break;
  case 3:
    finalMessage1 = "Average, ";
    finalMessage2 = ". An odd number of guesses was made specifically for you.";
    break;
  case 4:
    finalMessage1 = "So close, ";
    finalMessage2 = ". But no prize! (Legal disclaimer: There is no prize.)";
    break;
  case 5:
    finalMessage1 = "Suspiciously good, ";
    finalMessage2 = ". Have we met?";
    break;
  default:
    console.log("Error in 2nd switch statement");
}

window.alert(finalMessage1 + userName + finalMessage2);
