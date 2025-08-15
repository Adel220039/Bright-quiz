import {hardQuests, middQuests, easyQuests } from './questions.js';
let i = 0;
let currentQuests = [];

export function display(quests){
   currentQuests = quests;
   const questionHtml = document.querySelector('.question');
   const nextBtn = document.querySelector('.next-btn');
   
   if (questionHtml &&  nextBtn) {
      questionHtml.textContent = quests[i].question;

      const options =  document.querySelectorAll('.option');
      options.forEach(option =>{
         const {index} = option.dataset;
         option.textContent = quests[i].options[index];
      })
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


      const options =  document.querySelectorAll('.option');
      options.forEach(option =>{
         const {index} = option.dataset;
         option.addEventListener('click' ,()=>{
            if(index == currentQuests[i].correctOptionIndex){
                  //option.style = 'background-color :blue;';  
                  console.log('correct');
                  i++;
                  display(currentQuests);
               }else{
                  console.log('incorrect');
                  i++;
                  display(currentQuests);
               }
         })
      })
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


