import React from 'react';
import './Timer.css';


const Timer = ({countdownTimer}) => {
    return(
        <div className ='timer'>
        {`${countdownTimer} seconds`}
        </div> 
    );
}

export default Timer;