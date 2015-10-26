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
  answer: 6 || 'six' || 'Six'
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

  if (pitcher.pitches === 1) {
    $('#card-front').text(q2.title);
    $('#card-back').text(q2.question);  
  }
  else if (pitcher.pitches === 2) {
    $('#card-front').text(q3.title);
    $('#card-back').text(q3.question); 
  }
  else if (pitcher.pitches === 3) {
    $('#card-front').text(q4.title);
    $('#card-back').text(q4.question); 
  }

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
          answer == questionObject.otherAnswer4) {
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



// --- GAME FUNCTIONS ---

answerOutcome (1, q1);
answerOutcome (2, q2);
answerOutcome (3, q3);


// --- GAME FUNCTIONS ---



