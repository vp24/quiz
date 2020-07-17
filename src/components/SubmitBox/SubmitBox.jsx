import React from 'react';
import './SubmitBox.css';

const SubmitBox = ({handleSubmitAnswer, inputValue, handleChange}) => {
    return(  
    <div className = 'submitBox'>
    <form onSubmit={handleSubmitAnswer}>
    <label>
      <input className = 'field' autoFocus type="text" value={inputValue} onChange={handleChange} />
    </label>
    <input type="submit" value="Submit" />
  </form>
  </div>
    );
}

export default SubmitBox;