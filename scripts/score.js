
const scoreHtml = document.getElementById('total-score');
const rightAnswersHtml = document.getElementById('right-answers');
const wrongAnswersHtml = document.getElementById('wrong-answers');


function showResult(){
    const results = JSON.parse(localStorage.getItem('results'))
    rightAnswersHtml.textContent = results.rightAnswers;
    wrongAnswersHtml.textContent = results.wrongAnswers;
    scoreHtml.textContent = results.score ;
}
showResult()