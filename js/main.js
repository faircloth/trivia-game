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
  answer: 9
});

let q2 = new Question({
  title: 'Question 2',
  question: 'What is 1 + 2?',
  answer: 3
});

let q3 = new Question({
  title: 'Question 3',
  question: 'What is 5 + 5?',
  answer: 10
});

// ---- QUESTIONS ----



// ---- GAME CONSTRUCTORS ----
let hitter = new Hitter({
});

let pitcher = new Pitcher ({
});
// ---- GAME CONSTRUCTORS ----


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




// ---- CLICK EVENTS ----  



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

});

// ---- NEXT BUTTON ---- 




// ---- CLICK EVENTS END ----



// ---- GAME CONCLUSION ----

let maxNumOfPitches = 10;
var outsOnBoard = $('.outs').text();

// ---- GAME CONCLUSION ----



// ---- THE GAME ----


// ---- THE FIRST PITCH ----

$('#submitBtn').on('click', function () {

  var answer = $('#answerText').val();

  if (pitcher.pitches === 1) {
    
    if (answer == q1.answer) {
      hitter.homeRun();
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

// ---- THE FIRST PITCH ----



// ---- THE SECOND PITCH ----

$('#submitBtn').on('click', function () {
 
  var answer = $('#answerText').val();

  if (pitcher.pitches === 2) {
  
    if (answer == q2.answer) {
      hitter.homeRun();
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

// ---- THE SECOND PITCH ----


// ---- THE THIRD PITCH ----

$('#submitBtn').on('click', function () {

  var answer = $('#answerText').val();

  if (pitcher.pitches === 3) {
  
    if (answer == q3.answer) {
      hitter.homeRun();
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

// ---- THE THIRD PITCH ----




