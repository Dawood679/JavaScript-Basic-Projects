const questions = [
    {
        question:"That's the first question",
        answers:[
            {text:"Dawood",correct:true},
            {text:"Sham",correct:false},
            {text:"Mano",correct:false},
            {text:"Abu",correct:false}
        ]
    },
    {
        question:"That's the first question",
        answers:[
            {text:"Dawood",correct:true},
            {text:"Sham",correct:false},
            {text:"Mano",correct:false},
            {text:"Abu",correct:false}
        ]
    },
    {
        question:"That's the first question",
        answers:[
            {text:"Dawood",correct:true},
            {text:"Sham",correct:false},
            {text:"Mano",correct:false},
            {text:"Abu",correct:false}
        ]
    },
    {
        question:"That's the first question",
        answers:[
            {text:"Dawood",correct:true},
            {text:"Sham",correct:false},
            {text:"Mano",correct:false},
            {text:"Abu",correct:false}
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    restState();

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    })  

    
}
function restState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const selectedbtn = e.target;
    const isCorrect = selectedbtn.dataset.correct ==="true";
    if (isCorrect) {
        selectedbtn.classList.add("correct");
        score++;
    }
    else{
        selectedbtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
function showScore(){
    restState();
    questionElement.innerHTML = `Your Scored ${score} out of ${questions.length}!`
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    }
    else{
        showScore();
    }
}
nextButton.addEventListener("click" ,() => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    }
    else{
        startQuiz();
    }
})

startQuiz();