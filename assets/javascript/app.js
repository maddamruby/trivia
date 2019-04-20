const questions = document.querySelectorAll(".question");
const startButton = document.querySelector(".startButton");
let currentQuestion = 0;
const answerList = ['a blessing','an unkindness','a murder'];
let score = 0;

startButton.addEventListener("click", e => {
  const gameheading = document.querySelector(".gameheading");

  gameheading.classList.add("fadeOut");
  revealNextQuestion();
});
const revealNextQuestion= () =>{
    const prevQuestion = document.querySelector(`#q${currentQuestion}`);
    const scoreValue= document.querySelector('.scoreValue');
    scoreValue.textContent = ` Score: ${score}`
    if( prevQuestion){
        prevQuestion.classList.remove("fadeIn");
    }
    currentQuestion++
    const nextQuestion = document.querySelector(`#q${currentQuestion}`);

    nextQuestion.classList.add("fadeIn");
    nextQuestion.addEventListener("submit", e =>{
        e.preventDefault();
       const userChoice = e.target.querySelector("input[name='answer']:checked").value;
       if(userChoice === answerList[currentQuestion - 1]){
           score++;
    
       }
        revealNextQuestion();
        //This finds the checked radio box
       // console.log(e.target.querySelector("input[name='answer']:checked").value);
    })
}