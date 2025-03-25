const questions = [
  {
    question: "Seberapa cepat manusia normal saat berjalan?",
    options: ["12 m/jam", "200 m/jam", "5 km/jam", "18 km/jam"],
    answer: "5 km/jam",
  },
  {
    question: "Seberapa cepat cheetah dapat berlari?",
    options: ["125 km/jam", "100 km/jam", "8 km/jam", "9 m/jam"],
    answer: "125 km/jam",
  },
  {
    question: "Seberapa cepat elang dapat terbang?",
    options: ["600 km/jam", "389 km/jam", "80 m/jam", "90 km/jam"],
    answer: "389 km/jam",
  },
  {
    question: "Seberapa cepat jet tempur dapat melaju?",
    options: ["2.000 km/jam", "70 km/jam", "8000 km/jam", "2.500 km/jam"],
    answer: "2.500 km/jam",
  },
  {
    question: "Seberapa cepat asteroid?",
    options: ["107.226 km/jam", "70.000 km/jam", "20.000 km/jam", "900 km/jam"],
    answer: "107.226 km/jam",
  },
  {
    question: "Seberapa cepat cahaya?",
    options: [
      "1.079.500.848.8 km/jam",
      "1.079.252.848.8 km/jam",
      "1.009.252.848.8 km/jam",
      "1.079.432.848.8 km/jam",
    ],
    answer: "1.079.252.848.8 km/jam",
  },
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
  if (currentQuestionIndex >= questions.length) {
    document.getElementById("question").innerText = "Quiz selesai!";
    document.getElementById("options").innerHTML = "";
    document.getElementById(
      "score"
    ).innerText = `Skor Akhir: ${score} / ${questions.length}`;
    return;
  }

  const q = questions[currentQuestionIndex];
  document.getElementById("question").innerText = q.question;
  const optionsContainer = document.getElementById("options");
  optionsContainer.innerHTML = "";

  q.options.forEach((option) => {
    const button = document.createElement("button");
    button.innerText = option;
    button.classList.add("option");
    button.onclick = () => checkAnswer(option);
    optionsContainer.appendChild(button);
  });
}

function checkAnswer(selected) {
  const correct = questions[currentQuestionIndex].answer;
  if (selected === correct) {
    score++;
  }
  currentQuestionIndex++;
  loadQuestion();
}

window.onload = loadQuestion;
