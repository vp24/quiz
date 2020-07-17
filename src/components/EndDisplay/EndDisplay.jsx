import React from 'react';
import './EndDisplay.css';


const EndDisplay = ({whichOperation, resetToStart, countdownTimer, questionBank, questionsCorrect, questionsIncorrect, maxQuestionNumber, currentQuestionNumber}) => {
    return(
        <div>
        <div className = 'stats'>
        <p>{`You answered ${questionsCorrect} out of ${maxQuestionNumber} questions correctly!`}</p>
        <p>{countdownTimer > 0? `You had ${countdownTimer} seconds left` : 'You ran out of time!' }</p>
        <div className = 'resetButton'>
                <button autoFocus className = 'toStartScreenButton' onClick = {resetToStart}>To Start Screen</button>
            </div>
        </div>
            <div className ='results-container'>
            {questionBank.map( (items, index) =>
                {
                    return(
                    <div className = {`banner ${items.input == items.answer? ' rightAnswer' : ' wrongAnswer'}`} key = {index}>
                    <p>Question {index+1}:</p>
                    <p>{items.firstNumber} {items.operation} {items.secondNumber}</p>
                    <p>Correct Answer: {items.answer}</p>
                    <p>Your Answer: {items.input}</p>
                    </div>
                    );
                }
                    )
                }
            </div> 
        </div>
    );
}

export default EndDisplay;