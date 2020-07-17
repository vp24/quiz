import React from 'react';
import './ShowQuestion.css';

const ShowQuestion = ({whichOperation, firstNum, secondNum}) => {
    return(
        <div className ='numbers'>
        {firstNum} {whichOperation} {secondNum}
        </div> 
    );
}

export default ShowQuestion;