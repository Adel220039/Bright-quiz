import {hardQuests, middQuests, easyQuests } from './questions.js';
let i = 0;
let currentQuests = [];

export function display(quests){
   currentQuests = quests;
   const questionHtml = document.querySelector('.question');
   const optionsHtml = document.querySelector('.answers-grid');
   const nextBtn = document.querySelector('.next-btn');
   
   if (questionHtml && optionsHtml && nextBtn) {
      // Update question and options
      questionHtml.textContent = quests[i].question;
      optionsHtml.innerHTML = `
       <button>${quests[i].options[0]}</button>
       <button>${quests[i].options[1]}</button>
       <button>${quests[i].options[2]}</button>
       <button>${quests[i].options[3]}</button>
      `;
      
      // Update button text based on current position
      if (i === quests.length - 1) {
         nextBtn.textContent = 'Finish';
      } else {
         nextBtn.textContent = 'Next';
      }
   }
};

// Handle next button click
function handleNextClick() {
   if (i < currentQuests.length - 1) {
      i++;
      display(currentQuests);
   } else if (i === currentQuests.length - 1) {
      // Last question, redirect to score
      window.location.href = './score.html';
   }
}

// Initialize the game when DOM is loaded
export function initGame() {
    const selectedQuestions = localStorage.getItem('selectedQuestions');
    if (selectedQuestions) {
        const questions = JSON.parse(selectedQuestions);
        display(questions);
        
        // Add event listener only once
        const nextBtn = document.querySelector('.next-btn');
        if (nextBtn) {
            nextBtn.addEventListener('click', handleNextClick);
        }
    }
}

// Only add event listeners if we're on the level selection page
if (document.querySelector('.hard')) {
    const hardBtn = document.querySelector('.hard');
    const middBtn = document.querySelector('.medium');
    const easyBtn = document.querySelector('.easy');

    hardBtn.addEventListener('click' , e =>{
       localStorage.setItem('selectedQuestions', JSON.stringify(hardQuests));
       window.location.href = './game.html'
    })

    middBtn.addEventListener('click' , e =>{
        localStorage.setItem('selectedQuestions', JSON.stringify(middQuests));
        window.location.href = './game.html'
     });

     easyBtn.addEventListener('click' , e =>{
        localStorage.setItem('selectedQuestions', JSON.stringify(easyQuests));
        window.location.href = './game.html'
     })
}


