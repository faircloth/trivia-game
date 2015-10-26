import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';
import flip from './flip.js';
import Question from './question.js';
import Hitter from './hitter.js';
import Pitcher from './pitcher.js';


// ---- FLIP ----
$('.card').flip({
  trigger: 'click',
  axis: 'y',
});
// ---- FLIP ----




// ---- QUESTIONS ----
let q1 = new Question({
  title: 'Question 1',
  question: 'How many innings are in a MLB game?',
  answer: 9,
  otherAnswer1: 'nine',
  otherAnswer2: 'Nine'
});

let q2 = new Question({
  title: 'Question 2',
  question: 'What does ERA stand for?',
  answer: 'earned run average',
  otherAnswer1: 'Earned Run Average'
});

let q3 = new Question({
  title: 'Question 3',
  question: 'In baseball, each position has an assigned number. What number is assigned to the Shortstop position?',
  answer: 6,
  otherAnswer1: 'six',
  otherAnswer2: 'Six'
});

let q4 = new Question({
  title: 'Question 4',
  question: 'What is the last name of the pitcher who led the MLB in strikeouts this season?',
  answer: 'Kershaw',
  otherAnswer1: 'kershaw',
  otherAnswer2: 'Clayton Kershaw',
  otherAnswer3: 'clayton kershaw'
});

let q5 = new Question({
  title: 'Question 5',
  question: 'What is the last name of the hitter who led the MLB in home runs this season?',
  answer: 'Davis',
  otherAnswer1: 'davis',
  otherAnswer2: 'Chris Davis',
  otherAnswer3: 'chris davis'
});

let q6 = new Question({
  title: 'Question 6',
  question: 'What city\'s team won the 2014 World Series?',
  answer: 'San Francisco',
  otherAnswer1: 'san francisco',
  otherAnswer2: 'San Francisco Giants',
  otherAnswer3: 'san francisco giants'
});

let q7 = new Question({
  title: 'Question 7',
  question: 'Which MLB team has won the most World Series Championships',
  answer: 'New York Yankees',
  otherAnswer1: 'new york yankees',
  otherAnswer2: 'Yankees',
  otherAnswer3: 'yankees'
});

let q8 = new Question({
  title: 'Question 8',
  question: 'How many games are in the MLB regular season?',
  answer: '162'
});

let q9 = new Question({
  title: 'Question 9',
  question: 'What team is missing from this list of AL West teams: Mariners, Angels, Rangers, Athletics?',
  answer: 'Astros',
  otherAnswer1: 'astros'
});

let q10 = new Question({
  title: 'Question 10',
  question: 'What team won the 2013 World Series?',
  answer: 'Boston Red Sox',
  otherAnswer1: 'boston red sox',
  otherAnswer2: 'boston',
  otherAnswer3: 'Red Sox',
  otherAnswer4: 'red sox',
  otherAnswer5: 'Boston'
});

let q11 = new Question({
  title: 'Question 11',
  question: 'Which MLB team has the highest payroll?',
  answer: 'LA Dodgers',
  otherAnswer1: 'Dodgers',
  otherAnswer2: 'dodgers',
  otherAnswer3: 'Los Angeles Dodgers',
  otherAnswer4: 'la dodgers'
});

// ---- QUESTIONS ----






// ---- GAME CONSTRUCTORS ----
let hitter = new Hitter({
});

let pitcher = new Pitcher ({
});
// ---- GAME CONSTRUCTORS ----




// ---- ANIMATION ----

let delay = 400;
let addOn = 400;

// let delayTimer = function (selector, modification, style, wait) {
//   setTimeout ( function () {
//     '$' + '(' + selector + ')' + modification + '(' + style + ')';
//   }, wait);
// };

let animation = function () {

      setTimeout (function () {
        $('.box1').addClass('hidden-runner');
      }, delay);

      setTimeout (function () {
        $('.homerunMessage').addClass('showHrMessage');
      }, delay);

       setTimeout (function () {
        $('#homePlate').removeClass('hidden-runner');
      }, delay + addOn);

       setTimeout (function () {
        $('#homePlate').addClass('hidden-runner');
      }, delay + addOn + addOn);

      setTimeout (function () {
        $('#firstBase').removeClass('hidden-runner');
      }, delay + addOn + addOn);

      setTimeout (function () {
        $('#firstBase').addClass('hidden-runner');
      }, delay + addOn + addOn + addOn);

      setTimeout (function () {
        $('#secondBase').removeClass('hidden-runner');
      }, delay + addOn + addOn + addOn);

      setTimeout (function () {
        $('#secondBase').addClass('hidden-runner');
      }, delay + addOn + addOn + addOn + addOn);
      
      setTimeout (function () {
        $('#thirdBase').removeClass('hidden-runner');
      }, delay + addOn + addOn + addOn + addOn);

      setTimeout (function () {
        $('#thirdBase').addClass('hidden-runner');
      }, delay + addOn + addOn + addOn + addOn + addOn);

      setTimeout (function () {
        $('#homePlate').removeClass('hidden-runner');
      }, delay + addOn + addOn + addOn + addOn + addOn);

       setTimeout (function () {
        $('#homePlate').addClass('hidden-runner');
      }, delay + addOn + addOn + addOn + addOn + addOn + addOn);

      setTimeout (function () {
        $('.box1').removeClass('hidden-runner');
      }, delay + addOn + addOn + addOn + addOn + addOn + addOn + addOn);

      setTimeout (function () {
        $('.homerunMessage').removeClass('showHrMessage');
      }, delay + addOn + addOn + addOn + addOn + addOn + addOn + addOn + addOn);

};

// ---- ANIMATION ----




// ---- GAME CONCLUSION ----

let maxNumOfPitches = 10;
var outsOnBoard = $('.outs').text();

// ---- GAME CONCLUSION ----



// ---- KEEPING SCORE ----

let questionNumber = 1;
let countQuestions = function () {
  return questionNumber = questionNumber + 1;
}

console.log('Questions asked so far = ' + questionNumber );
console.log('The player has hit submit ' + pitcher.pitches + ' times.');

// ---- KEEPING SCORE ----



// ---- START STATUS ----

if (pitcher.pitches === 0){
  $('.outs').text(hitter.outsLeft);
  $('.score').text(hitter.score);
  $('#card-front').text(q1.title);
  $('#card-back').text(q1.question);
} else {
  alert('Pitches have been thrown');
};

// ---- START STATUS ----



// ---- START OVER ----

$('#startOverBtn').on('click', function (){
  pitcher.startOver();
  hitter.newSetOfOuts();
  hitter.newScore();
  console.log('Questions asked so far = ' + questionNumber );
  console.log('The player has hit submit ' + pitcher.pitches + ' times.');
  if (pitcher.pitches === 0){
    $('.outs').text(3);
    $('.score').text(0);
    $('#card-front').text(q1.title);
    $('#card-back').text(q1.question);
    $('#answer-result').text('Results?!?!').parent().removeClass('green'); 
    $('#answer-result').text('Results?!?!').parent().removeClass('red'); 
    $('#endOfGame').addClass('hiddenEOG');
    $('.arrowimg').addClass('hidden');
  } else {
    alert('Pitches have been thrown');
  };
});

// ---- START OVER ----



// ---- SUBMIT BUTTON ----  
$('#submitBtn').on('click', function () {

  if (pitcher.pitches >= questionNumber) {
    alert('Go to the next question');
  }
  else {
    pitcher.throwPitch();
    console.log('The player has hit submit ' + pitcher.pitches + ' time.');    
    $('.arrowimg').removeClass('hidden');
  }

  if ( $('.outs').text() == 0  || pitcher.pitches == 10 ) {
    $('#endOfGame').addClass('endOfGame');
    $('#finalScore').append(hitter.score);
  }

});

// ---- SUBMIT BUTTON ----  




// ---- DISPLAY THE NEXT QUESTION ----  
let questionDisplay = function (pitchNumber, questionObject) {
  if (pitcher.pitches === pitchNumber) {
    $('#card-front').text(questionObject.title);
    $('#card-back').text(questionObject.question);
  }
};
// ---- DISPLAY THE NEXT QUESTION ----    



// ---- NEXT BUTTON ----  

$('#nextQBtn').on('click', function () {

  $('.arrowimg').addClass('hidden');
  $('#answer-result').text('Results?!?!').parent().removeClass('green'); 
  $('#answer-result').text('Results?!?!').parent().removeClass('red');
  
  countQuestions();
  console.log('Questions asked so far = ' + questionNumber);

  if ( $('.outs').text() == 0 || pitcher.pitches == 10 ) {
    $('#endOfGame').addClass('endOfGame');
  };

  questionDisplay(1, q2);
  questionDisplay(2, q3);
  questionDisplay(3, q4);
  questionDisplay(4, q5);
  questionDisplay(5, q6);
  questionDisplay(6, q7);
  questionDisplay(7, q8);
  questionDisplay(8, q9);
  questionDisplay(9, q10);
  questionDisplay(10, q11); 

});

// ---- NEXT BUTTON ---- 




// ---- PITCH FUNCTION ----

let answerOutcome = function (pitchNumber, questionObject) {

  $('#submitBtn').on('click', function () {

    var answer = $('#answerText').val();
    console.log(pitcher.pitches);

    if (pitcher.pitches === pitchNumber && pitcher.pitches == questionNumber) {
      
      if (answer == questionObject.answer ||
          answer == questionObject.otherAnswer1 ||
          answer == questionObject.otherAnswer2 ||
          answer == questionObject.otherAnswer3 ||
          answer == questionObject.otherAnswer4 ||
          answer == questionObject.otherAnswer5 ||
          answer == questionObject.otherAnswer6) {
        hitter.homeRun();
        animation ();
      
        $('#answer-result').text('CORRECT! HOME RUN!').parent().addClass('green')
        $('.score').text(hitter.score);
      }
      else {
        hitter.getOut();
        $('.outs').text(hitter.outsLeft);
        $('.score').text(hitter.score);
        $('#answer-result').text('OUT!').parent().addClass('red')
      };

    }

  });
}


// ---- PITCH FUNCTION ----






// --- GAME FUNCTIONS ---

answerOutcome (1, q1);
answerOutcome (2, q2);
answerOutcome (3, q3);
answerOutcome (4, q4);
answerOutcome (5, q5);
answerOutcome (6, q6);
answerOutcome (7, q7);
answerOutcome (8, q8);
answerOutcome (9, q9);
answerOutcome (10, q10);
answerOutcome (11, q11);


// --- GAME FUNCTIONS ---



