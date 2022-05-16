const question = $("#question")
const possAnswer = $("#possAnswer")
const timerEl = $('#quizTimer')
const startBtn = $("#playBtn")
let scoresList = $("#highScores")

var questionArray = [
  {
    question: xxx,
    possAnswer: xxx, xxx, xxx, xxx,
    correctAnswer: xxx,
  },

  {
    question: xxx,
    possAnswer: xxx, xxx, xxx, xxx,
    correctAnswer: xxx,
  },

  {
    question: xxx,
    possAnswer: xxx, xxx, xxx, xxx,
    correctAnswer: xxx,
  },

  {
    question: xxx,
    possAnswer: xxx, xxx, xxx, xxx,
    correctAnswer: xxx,
  },
]

let timer = 5;
let currentIndex = 0;

function renderQuestion() {
  question.text(questionArray[currentIndex].question),
  possAnswer.text(questionArray[currentIndex].possAnswer)
}

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