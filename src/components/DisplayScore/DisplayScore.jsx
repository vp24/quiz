import React from 'react';
import './DisplayScore.css';

const DisplayScore = ({ questionsCorrect, questionsIncorrect, maxQuestionNumber, currentQuestionNumber}) => {
    return(
        <div className ='score'>
        <p>{`Question number: ${currentQuestionNumber}/${maxQuestionNumber}`}</p>
        </div> 
    );
}

export default DisplayScore;