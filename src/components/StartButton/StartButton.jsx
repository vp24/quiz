import React from 'react';
import './StartButton.css';


const StartButton = ({startButton}) => {
    return(
        <div className = 'start-container'>
            <div className = 'instructions'>
                <h3>Instructions</h3>
                <p>You have 60 seconds to answer 10 math questions</p>
            </div>
                <div className ='startButton'>
                <button autoFocus onClick = {startButton}>Start Quiz</button>
                </div> 
        </div>
    );
}

export default StartButton;