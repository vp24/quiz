import React from 'react';
import ShowQuestion from './components/ShowQuestion/ShowQuestion';
import SubmitBox from './components/SubmitBox/SubmitBox';
import DisplayScore from './components/DisplayScore/DisplayScore';
import Timer from './components/Timer/Timer';
import StartButton from './components/StartButton/StartButton';
import './App.css';
import EndDisplay from './components/EndDisplay/EndDisplay';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstNum: null,
      secondNum: null,
      answerNum: null,
      inputValue: '',
      maxQuestionNumber: 10,
      currentQuestionNumber: 1,
      questionsCorrect: 0,
      questionsIncorrect: 0,
      countdownTimer: 60,
      isQuizStarted: false,
      isQuizFinished: false,
      questionBank: [],
      timeCurrentlyDowning: false,
      isTimeUp: false,
      showStartPage: true,
      toStartPage: true,
      whichOperation: ''
    };
  }

  resetToStart = () => {
    console.log('To Start Page');
    window.location.reload(false);
  }




  startButton = () => {
    this.setState({
      inputValue: '',
      maxQuestionNumber: 10,
      currentQuestionNumber: 1,
      questionsCorrect: 0,
      questionsIncorrect: 0,
      countdownTimer: 60,
      isQuizFinished: false,
      questionBank: [],
      isTimeUp: false,
      timeCurrentlyDowning: true,
      isQuizStarted: true,
      showStartPage: false,
      toStartPage: false
    }, this.setNums());
    const interval = setInterval(() => {
      //console.log('This will run every second!');

      if(this.state.maxQuestionNumber+1 > this.state.currentQuestionNumber && this.state.timeCurrentlyDowning === true){
      this.setState(prevState => ({
        countdownTimer: prevState.countdownTimer--,
      }));
    } 
      if(this.state.currentQuestionNumber > this.state.maxQuestionNumber || this.state.isQuizFinished===true || this.state.countdownTimer <= 0){

        clearInterval(interval);
        this.setState({
          timeCurrentlyDowning: false,
          isQuizStarted: false,
          isQuizFinished: true
        });
      }

  } 
  
  , 1000);

}
  pushInData = () => {
    this.state.questionBank.push({firstNumber: this.state.firstNum, secondNumber: this.state.secondNum, answer: this.state.answerNum, input: this.state.inputValue, operation: this.state.whichOperation});
  }

  handleSubmitAnswer = (event) => {
    event.preventDefault();
    if(this.state.inputValue != ''){
    if(this.state.answerNum == this.state.inputValue){
      this.ifAnswerCorrect();
      this.pushInData();
      this.setNums();
    }
    else if(this.state.answerNum != this.state.inputValue){
      this.ifAnswerIncorrect();
      this.pushInData();
      this.setNums();
  }
  event.target.reset();
}

}

  ifAnswerCorrect = () => {
      this.setState(prevState => (
        {
      currentQuestionNumber: prevState.currentQuestionNumber++,
      questionsCorrect: prevState.questionsCorrect++
      })
    );
  }

  ifAnswerIncorrect = () => {
    this.setState(prevState => ({
    currentQuestionNumber: prevState.currentQuestionNumber++,
    questionsIncorrect: prevState.questionsIncorrect++
    })
  );
}

  setAdditionNums = () => {
    let firstNum = Math.floor(Math.random()*10);
    let secondNum = Math.floor(Math.random()*10);
    let ans = firstNum+secondNum;

    this.setState({
      firstNum: firstNum,
      secondNum: secondNum,
      answerNum: ans,
      inputValue: '',
      whichOperation: '+'

    }, );
  }

  setSubtractionNums = () => {
    let firstNum = Math.floor(Math.random()*10);
    let secondNum = Math.floor(Math.random()*10);

    while(secondNum > firstNum){
      secondNum = Math.floor(Math.random()*10);
    }

    let ans = firstNum-secondNum;

    this.setState({
      firstNum: firstNum,
      secondNum: secondNum,
      answerNum: ans,
      inputValue: '',
      whichOperation: '-'

    }, );
  }

  setMultiplicationNums = () => {
    let firstNum = Math.floor(Math.random()*10);
    let secondNum = Math.floor(Math.random()*10);
    let ans = firstNum*secondNum;

    this.setState({
      firstNum: firstNum,
      secondNum: secondNum,
      answerNum: ans,
      inputValue: '',
      whichOperation: 'x'

    }, );
  }

  setDivisionNums = () => {
    let firstNum = Math.floor(Math.random()*10);
    let secondNum = Math.floor(Math.random()*10);

    while(secondNum > firstNum || (firstNum%secondNum) !== 0 || secondNum !== 0) {
      secondNum = Math.floor(Math.random()*10);
    }

    let ans = firstNum/secondNum;

    this.setState({
      firstNum: firstNum,
      secondNum: secondNum,
      answerNum: ans,
      inputValue: '',
      whichOperation: '/'

    }, );
  }

  setNums = () => {
    let operationList = ['+', '-', 'x', '/'];

    let rng = Math.floor((Math.random()*10)/4);

    let which = operationList[rng];

    if (which === '+'){
      this.setAdditionNums();
    }
    else if(which === '-'){
      this.setSubtractionNums();
    }
    else if(which === 'x'){
      this.setMultiplicationNums();
    }
    else if(which === '/'){
      this.setDivisionNums();
    }
  }

  handleChange = (event) => {
    this.setState({inputValue: event.target.value});
  }


  componentDidMount(){
  }

  


  render() {
    return (
      <div className = 'container-div'>

      {this.state.toStartPage == true ? <StartButton startButton = {this.startButton}/> : null}

      {this.state.isQuizStarted? <div className = 'quizBox'>
      <DisplayScore whichOperation = {this.state.whichOperation} maxQuestionNumber = {this.state.maxQuestionNumber} currentQuestionNumber = {this.state.currentQuestionNumber} questionsCorrect = {this.state.questionsCorrect} questionsIncorrect = {this.state.questionsIncorrect}/>
          <div className ='mainQuizDetail'>
      <Timer countdownTimer = {this.state.countdownTimer}/>
      <ShowQuestion whichOperation = {this.state.whichOperation} firstNum = {this.state.firstNum} secondNum = {this.state.secondNum}/>
      <SubmitBox handleSubmitAnswer = {this.handleSubmitAnswer} handleChange = {this.handleChange}/>
          </div>
        </div> : null}

      {this.state.isQuizFinished ?(
        <div>
        <EndDisplay whichOperation = {this.state.whichOperation} resetToStart = {this.resetToStart} countdownTimer = {this.state.countdownTimer} questionBank = {this.state.questionBank} maxQuestionNumber = {this.state.maxQuestionNumber} currentQuestionNumber = {this.state.currentQuestionNumber} questionsCorrect = {this.state.questionsCorrect} questionsIncorrect = {this.state.questionsIncorrect}/></div>
      ): null}

      
      </div>
    );
  }
}


export default App;