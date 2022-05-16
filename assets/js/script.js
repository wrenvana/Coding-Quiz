const question = $("#question")
const possAnswer = $("#possAnswer")
const timerEl = $('#quizTimer')
const startBtn = $("#playBtn")
const nextBtn = $("#nextBtn")
let scoresList = $("#highScores")

var questionArray = [
  {
    question: xx1,
    possAnswer: xxx, xxx, xxx, xxx,
    correctAnswer: xxx,
  },

  {
    question: xx2,
    possAnswer: xxx, xxx, xxx, xxx,
    correctAnswer: xxx,
  },

  {
    question: xx3,
    possAnswer: xxx, xxx, xxx, xxx,
    correctAnswer: xxx,
  },

  {
    question: xx4,
    possAnswer: xxx, xxx, xxx, xxx,
    correctAnswer: xxx,
  },
]

let timer = 5;
let currentIndex = 0;

// Show question
function renderQuestion() {
  question.text(questionArray[currentIndex].question),
  possAnswer.text(questionArray[currentIndex].possAnswer)
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
    timerText.text(timer)
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
  var userInitials = prompt("Your score is" + score + "." + "\nPlease enter your initials.")
  var userObj = {
    initials,
    score
  }
  currentScores.push(userObj)
  localStorage.setItem("highScores", JSON.stringify(userObj))
  renderHighScores();
}