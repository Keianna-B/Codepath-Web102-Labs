import { useState } from 'react'
import './App.css'
//import Card from './components/Card.jsx';
const cardSet = [{
  "id": 1,
  "question": "¿Qué es este animal?",
  "answer": "El pato",
  "image": "images/Baby-Duck.jpg",
  "category": "vocabulary",
},{
  "id": 2,
  "question": "¿Qué es este animal?",
  "answer": "El cerdo",
  "image": "images/Pig.jpg",
  "category": "vocabulary",
},{
  "id": 3,
  "question": "¿Qué es este animal?",
  "answer": "La oveja",
  "image": "Sheep.jpg",
  "category": "vocabulary",
},{
  "id": 4,
  "question": "¿Qué es este animal?",
  "answer": "El canguro",
  "image": "Kangaroo.jpg",
  "category": "vocabulary",
},{
  "id": 5,
  "question": "¿Qué es este animal?",
  "answer": "El cabro",
  "image": "Goat.jpg",
  "category": "vocabulary",
},{
  "id": 6,
  "question": "¿Qué es este animal?",
  "answer": "La tortuga",
  "image": "Turtle.jpg",
  "category": "vocabulary",
},
{
  "id": 7,
  "question": "What is the present tense of the verb 'hablar'?",
  "answer": "hablo, hablas, habla, hablamos, hablan",
  "image": "AR-Present.jpg",
  "category": "conjugation",
},
{
  "id": 8,
  "question": "What is the present tense of the verb 'comer'?",
  "answer": "como, comes, come, comemos, comen",
  "image": "ER-Present.jpg",
  "category": "conjugation",
},{
  "id": 9,
  "question": "What is the present tense of the verb 'vivir'?",
  "answer": "vivo, vives, vive, vivimos, viven",
  "image": "IR-Present.jpg",
  "category": "conjugation",
},{
  "id": 10,
  "question": "What is the past preterite tense of the verb 'hablar'?",
  "answer": "hablé, hablaste, habló, hablamos, hablaron",
  "image": "AR-Past.jpg",
  "category": "conjugation",
},{
  "id": 11,
  "question": "What is the past preterite tense of the verb 'comer'?",
  "answer": "comí, comiste, comió, comimos, comieron",
  "image": "ER&IR-Past.jpg",
  "category": "conjugation",
},{
  "id": 12,
  "question": "What is the past preterite tense of the verb 'vivir'?",
  "answer": "viví, viviste, vivió, vivimos, vivieron",
  "image": "ER&IR-Past.jpg",
  "category": "conjugation",
}
]

function App() {
  return (
    <>
      <div id="header">
        <h1 id="title">Spanish Flash Cards</h1>
        <p id="description">Use these Spanish flash cards to test your knowledge</p>
        <p id="flashcard-count">Number of cards: {cardSet.length}</p>
      </div>
      <div className="flashcard-container">
        <div className="flashcard" >
          <div id={cardSet.category}>
            <div>
              <h2>{cardSet.question}</h2>
              
              {
              cardSet.category==="vocabulary"?(
              <img src={cardSet.image} alt={cardSet.question} />)
              :(<></>)
              }
              </div>
            <div>
              
              {
              cardSet.category==="conjugation"?(
              <img src={cardSet.image} alt={cardSet.answer} />)
              :(<></>)
            } 
              <h2>{cardSet.answer}</h2>
            </div>
          </div>
        </div>
      </div>

      
      <div className="button-container">
        <button id="previous-button">Previous</button>
        <button id="next-button">Next</button>
      </div>

    </>
  );
};

export default App;