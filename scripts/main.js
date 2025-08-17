import {
   hardQuests,
   middQuests,
   easyQuests 
} from './questions.js';


let i = 0;
let currentQuests = [];
let optionClickHandlers = []; // Store the click handlers for each option
export let score = 0;
export let rightAnswers = 0;
export let wrongAnswers = 0;



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
let TimeoutId ;
let TimeId ;
// Handle next button click
function handleNextClick() {
   if (i < currentQuests.length - 1) {
      const options =  document.querySelectorAll('.option');
      options.forEach(option =>{
         const {index} = option.dataset;
         clearTimeout(TimeoutId);
         clearTimeout(TimeId)
         hideCorIncor(option,index , currentQuests, i)
      })

      i++;
      display(currentQuests);
      // Restore event listeners when moving to next question
      restoreOptionEventListeners();
   } else if (i === currentQuests.length - 1) {
      // Last question, redirect to score
      localStorage.setItem('results' , JSON.stringify({score ,rightAnswers ,wrongAnswers}))
      window.location.href = './score.html';
   }
}
// show Correct Incorrect answers
function showCorIncor(option, index, currentQuests, currentIndex){
   if(index == currentQuests[currentIndex].correctOptionIndex){
      option.classList.add('active-correct');
   };

   if(index != currentQuests[currentIndex].correctOptionIndex ){
      option.classList.add('active-incorrect');
   }
};

// hide Correct Incorrect answers

function hideCorIncor(option, index, currentQuests, currentIndex){
   if(index == currentQuests[currentIndex].correctOptionIndex){
      option.classList.remove('active-correct');
   };

   if(index != currentQuests[currentIndex].correctOptionIndex ){
      option.classList.remove('active-incorrect');
   }
}

// Function to remove event listeners from all options
function removeOptionEventListeners() {
   const options = document.querySelectorAll('.option');
   options.forEach((option, optionIndex) => {
      if (optionClickHandlers[optionIndex]) {
         option.removeEventListener('click', optionClickHandlers[optionIndex]);
      }
   });
}

// Function to restore event listeners to all options
function restoreOptionEventListeners() {
   const options = document.querySelectorAll('.option');
   options.forEach((option, optionIndex) => {
      if (optionClickHandlers[optionIndex]) {
         option.addEventListener('click', optionClickHandlers[optionIndex]);
      }
   });
}

// Initialize the game when DOM is loaded
export function initGame() {
    const scoreNow = document.querySelector('.score-now');
    scoreNow.textContent = score;
    const selectedQuestions = localStorage.getItem('selectedQuestions');
    if (selectedQuestions) {
        const questions = JSON.parse(selectedQuestions);
        display(questions);
        
        // Add event listener only once
        const nextBtn = document.querySelector('.next-btn');
        if (nextBtn) {
            nextBtn.addEventListener('click', handleNextClick);
        }


      const options = document.querySelectorAll('.option');
      options.forEach((option, optionIndex) => {
         const {index} = option.dataset;
         
         // Create the click handler function
         const clickHandler = () => {
            const currentIndex = i; // Store current index before any changes
            showCorIncor(option, index, currentQuests, currentIndex);
            
            // Remove all event listeners immediately after click
            removeOptionEventListeners();
            
            if(index == currentQuests[currentIndex].correctOptionIndex){ 
               score += currentQuests[currentIndex].points;
               rightAnswers +=1;
               scoreNow.textContent = score;
               clearTimeout(TimeoutId) 
               TimeoutId = setTimeout(()=>{
                  i++;
                  hideCorIncor(option, index, currentQuests, currentIndex);
                  display(currentQuests);
                  // Restore event listeners after timeout
                  restoreOptionEventListeners();
               }, 5000)
               
            } else {
               wrongAnswers +=1;
               clearTimeout(TimeId)
               TimeId = setTimeout(()=>{
                  i++;
                  hideCorIncor(option, index, currentQuests, currentIndex);
                  display(currentQuests);
                  // Restore event listeners after timeout
                  restoreOptionEventListeners();
               }, 5000)
            }
         };
         
         // Store the handler function
         optionClickHandlers[optionIndex] = clickHandler;
         
         // Add the event listener
         option.addEventListener('click', clickHandler);
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


