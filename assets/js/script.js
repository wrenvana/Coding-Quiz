const question = $("#question")
const possAnswer1 = $("#possAnswer1")
const possAnswer2 = $("#possAnswer2")
const possAnswer3 = $("#possAnswer3")
const possAnswer4 = $("#possAnswer4")
const timerEl = $('#quizTimer')
const startBtn = $("#playBtn")
const nextBtn = $("#nextBtn")
let scoresList = $("#highScores")

var questionArray = [
  {
    question: "xx1",
    possAnswer1: "xxx",
    possAnswer2: "xxx",
    possAnswer3: "xxx",
    possAnswer4: "xxx",
    correctAnswer: "xxx",
  },

  {
    question: "xx2",
    possAnswer1: "xxx",
    possAnswer2: "xxx",
    possAnswer3: "xxx",
    possAnswer4: "xxx",
    correctAnswer: "xxx",
  },

  {
    question: "xx3",
    possAnswer1: "xxx",
    possAnswer2: "xxx",
    possAnswer3: "xxx",
    possAnswer4: "xxx",
    correctAnswer: "xxx",
  },

  {
    question: "xx4",
    possAnswer1: "xxx",
    possAnswer2: "xxx",
    possAnswer3: "xxx",
    possAnswer4: "xxx",
    correctAnswer: "xxx",
  },
]

let timer = 5;
let currentIndex = 0;

// Show question
function renderQuestion() {
  question.text(questionArray[currentIndex].question),
  possAnswer1.text(questionArray[currentIndex].possAnswer1)
  possAnswer2.text(questionArray[currentIndex].possAnswer2)
  possAnswer3.text(questionArray[currentIndex].possAnswer3)
  possAnswer4.text(questionArray[currentIndex].possAnswer4)
}

// List high scores
function renderHighScores() {
  var currentScores = JSON.parse(localStorage.getItem('highScores')) || []
  scoresList.empty();
  if(scoresList.length === 0) {
    return scoresList.text("None Yet - Try the Quiz!")
  }
  for (let i = 0; i < currentScores.length; i++) {
    const scoreObj = currentScores[i];
    var newLi = $("<li>", {
      class: "list-group-item"
    })
    .text(scoreObj.initials + '___________' + scoreObj.score)
    scoresList.append(newLi)
  }
  
}

// Add event listener to buttons
startBtn.on("click", startQuiz)
nextBtn.on("click", nextQuestion)

// Start quiz
function startQuiz() {
  timer = 5;
  score = 0;
  renderQuestion();
  var gameTimer = setInterval(() => {
    if(timer === 0) {
      clearInterval(quizTimer)
      endQuiz()
    }
    timerEl.text(timer)
    timer--
  }, 1000);
}

// Cycle questions
function nextQuestion() {
  currentIndex++
  if (currentIndex === questionArray.length) currentIndex = 0;
  renderQuestion();
}

// End quiz and display scores
function endQuiz() {
  var userInitials = prompt("Your score is " + score + "." + "\nPlease enter your initials.")
  var userObj = {
    initials,
    score
  }
  currentScores.push(userObj)
  localStorage.setItem("highScores", JSON.stringify(userObj))
  renderHighScores();
}