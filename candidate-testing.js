const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American women in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = ["Who was the first American women in space? ", "True or False: 5000 meters = 5 kilometers. ", "(5+3)/2+10=? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "True", "40", "Trajectory", "3"];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //

candidateName = input.question("What is your name? ");
}




function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
let i =0

while (i < questions.length) {
 candidateAnswers[i] = input.question(questions[i]);
 i++
}
}


function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
console.log(`\nCandidate Name: ${candidateName}`);

let i = 0;
let numCorrect = 0;
while (i < questions.length) {


console.log(`${Number([i]) + 1}) ${questions[i]} \nYour Answer: ${candidateAnswers[i]} \nCorrect Answer: ${[correctAnswers[i]]} \n\n`) 
i++
}

if (candidateAnswers[0].toLowerCase() === correctAnswers[0].toLowerCase()) {
  numCorrect = numCorrect +1;
} if  (candidateAnswers[1].toLowerCase() === correctAnswers[1].toLowerCase()) {
  numCorrect = numCorrect +1;
} if (candidateAnswers[2].toLowerCase() === correctAnswers[2].toLowerCase()) {
  numCorrect = numCorrect +1
} if (candidateAnswers[3].toLowerCase() === correctAnswers[3].toLowerCase()) {
  numCorrect = numCorrect +1
} if (candidateAnswers[4].toLowerCase() === correctAnswers[4].toLowerCase()) {
  numCorrect = numCorrect +1


  let grade = (numCorrect / questions.length) *100;
  console.log(`>>> Overall Grade: ${grade}% (${numCorrect} of ${questions.length} responses correct) <<< `)

  if (grade >= 80) {
    console.log(">>> Status: PASSED <<<");
  } else {
    console.log(">>> Status: FAILED <<<")
  }
  return grade;
}
}
function runProgram() {
  askForName();
 
 // TODO 1.1c: Ask for candidate's name //
console.log(`Greetings ${candidateName}!\n`)


  
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
}; 