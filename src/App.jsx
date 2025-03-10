import { useEffect, useState } from 'react'
import './App.css'

const cardSet = [{
  "id": 1,
  "question": "¿Qué es este animal?",
  "answer": "El pato",
  "image": ".src/assets/Baby-Duck.jpg",
  "category": "vocabulary",
},{
  "id": 2,
  "question": "¿Qué es este animal?",
  "answer": "El cerdo",
  "image": ".src/assets/Pig.jpg",
  "category": "vocabulary",
},{
  "id": 3,
  "question": "¿Qué es este animal?",
  "answer": "La oveja",
  "image": ".src/assets/Sheep.jpg",
  "category": "vocabulary",
},{
  "id": 4,
  "question": "¿Qué es este animal?",
  "answer": "El canguro",
  "image": ".src/assets/Kangaroo.jpg",
  "category": "vocabulary",
},{
  "id": 5,
  "question": "¿Qué es este animal?",
  "answer": "El cabro",
  "image": ".src/assets/Goat.jpg",
  "category": "vocabulary",
},{
  "id": 6,
  "question": "¿Qué es este animal?",
  "answer": "La tortuga",
  "image": ".src/assets/Turtle.jpg",
  "category": "vocabulary",
},
{
  "id": 7,
  "question": "What is the present tense of the verb 'hablar'?",
  "answer": "hablo, hablas, habla, hablamos, hablan",
  "image": ".src/assets/AR-Present.jpg",
  "category": "conjugation",
},
{
  "id": 8,
  "question": "What is the present tense of the verb 'comer'?",
  "answer": "como, comes, come, comemos, comen",
  "image": ".src/assets/ER-Present.jpg",
  "category": "conjugation",
},{
  "id": 9,
  "question": "What is the present tense of the verb 'vivir'?",
  "answer": "vivo, vives, vive, vivimos, viven",
  "image": ".src/assets/IR-Present.jpg",
  "category": "conjugation",
},{
  "id": 10,
  "question": "What is the past preterite tense of the verb 'hablar'?",
  "answer": "hablé, hablaste, habló, hablamos, hablaron",
  "image": ".src/assets/AR-Past.jpg",
  "category": "conjugation",
},{
  "id": 11,
  "question": "What is the past preterite tense of the verb 'comer'?",
  "answer": "comí, comiste, comió, comimos, comieron",
  "image": ".src/assets/ER&IR-Past.jpg",
  "category": "conjugation",
},{
  "id": 12,
  "question": "What is the past preterite tense of the verb 'vivir'?",
  "answer": "viví, viviste, vivió, vivimos, vivieron",
  "image": ".src/assets/ER&IR-Past.jpg",
  "category": "conjugation",
}
]

let currentCard = cardSet[Math.floor(Math.random() * cardSet.length)];
let drawnCards = new Array(12);
drawnCards.fill(false);
let isFlipped = false;
const flipCard = () => {
  isFlipped = !isFlipped;
}
const getRandomCard = () => {
  if (drawnCards.every((card) => card == true)){
    return currentCard;
  }
    nextCard = cardSet[Math.floor(Math.random() * cardSet.length)];
  while (drawnCards[nextCard.id - 1] === true){
    nextCard = cardSet[Math.floor(Math.random() * cardSet.length)];
  }
  currentCard = nextCard;
  drawnCards[currentCard.id - 1] = true;
  return currentCard;
}

const backButton = () => {
  if (currentCard.id > 1) {
    currentCard = cardSet[currentCard.id - 2];
  }
}
const nextButton = () => {
  currentCard = getRandomCard();
  drawnCards[currentCard.id - 1] = true;
}

function App(){
  return (
    <>
      <div id="header">
        <h1 id="title">Spanish Flash Cards</h1>
        <p id="description">Use these Spanish flash cards to test your knowledge</p>
        <p id="flashcard-count">Number of cards: {cardSet.length}</p>
      </div>

      <div className="flashcard-container">
        <div className="flashcard" onClick={flipCard}>
        <div id={currentCard.category}>
          { isFlipped===false?(
            <>
              <div className="question">
              <h2>{currentCard.question}</h2>
              {
              currentCard.category==="vocabulary"?(
              <img src={currentCard.image} alt={currentCard.answer} />)
              :(<></>)
              }
              </div>
            <div className="question">
              {
              currentCard.category==="conjugation"?(
              <img src={currentCard.image} alt={currentCard.answer} />)
              :(<></>)
            } 
            </div>
            </>
          ):(
            <div className="answer">
              <h2>{currentCard.answer}</h2>
            </div>)}
          </div>
        </div>
      </div>


      <div className="button-container">
        <button id="previous-button" onClick={backButton}>Previous</button>
        <button id="next-button" onclock={nextButton}>Next</button>
      </div> 

    </>
  );
};

export default App;
