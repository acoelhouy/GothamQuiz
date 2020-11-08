import React, {Component} from 'react';
import QuizQuestions from './QuizQuestions.js';
import {QuizzBody} from "../data/quiz.json";


const ActualPosition = function(){

    let BodyLength = QuizzBody.length;
    let Validation = 0;

    for(let i = 0; i < BodyLength; i++){
        if(QuizzBody[i].Answered == false){
            Validation = i+1;          
            break;
        }   
    }
    return Validation; 
}



const GetQuestion = function(Index){
    if(!Index){
    var ActualPositionNumber = ActualPosition();
    }else{
    var ActualPositionNumber = Index;
    }
    let QuestionPosition = 0;
    QuestionPosition = ActualPositionNumber - 1;
    let Question = QuizzBody[QuestionPosition].Question;
    return Question;
}



const GetRightAnswer = function(Index){
    if(!Index){
    var ActualPositionNumber = ActualPosition();
    }else{
    var ActualPositionNumber = Index;
    }
    let QuestionPosition = 0;
    QuestionPosition = ActualPositionNumber - 1;
    let Answers = QuizzBody[QuestionPosition].RightAnswer;
    return Answers;
}


const GetWrongAnswers = function(Index){
    if(!Index){
        var ActualPositionNumber = ActualPosition();
    }else{
        var ActualPositionNumber = Index;
     }
    let QuestionPosition = 0;
    QuestionPosition = ActualPositionNumber - 1;
    let Answers = QuizzBody[QuestionPosition].WrongAnswers;
    return Answers;
}


const TotalQuestions = QuizzBody.length;


class QuizBody extends Component{

    constructor(props){

        super(props);

        this.ActualPosition = ActualPosition();
        this.state = {
        Question: GetQuestion(),
        RightAnswer: GetRightAnswer(),
        WrongAnswers: GetWrongAnswers(),
        //NextQuestion:this.NextQuestion.bind(this);
        RightCounter: 0,
        onTrigger: this.handleFormChild.bind(this)

    }
}

    
    componentDidMount(){

    if(!this.state.ActualPosition){    
    this.setState({ActualPosition: 1})
    this.setState({Question: GetQuestion(0)});
    this.setState({RightAnswer: GetRightAnswer(0)});
    this.setState({WrongAnswers: GetWrongAnswers(0)});
    }

}

handleFormChild = () =>{

    var value = this.value;
    this.props.onSelect(value); 

}

    NextQuestion = () => {
    if(this.state.ActualPosition < TotalQuestions){
     this.setState(
        (prevState,props)=>{
            return {ActualPosition:prevState.ActualPosition+1};
         }
     );
     this.setState({Question: GetQuestion(this.state.ActualPosition+1)});
     this.setState({RightAnswer: GetRightAnswer(this.state.ActualPosition+1)});
     this.setState({WrongAnswers: GetWrongAnswers(this.state.ActualPosition+1)});
    }

    }
  
  
  


    render(){

        const Position = this.state.ActualPosition;
        const Question = this.state.Question;
        const WrongAnswers = this.state.WrongAnswers;
        const RightAnswer = this.state.RightAnswer;


        return(

            <div id="BodyQuiz">
                <div id="OpacityLayout"></div>

                <div id="ContentLayout">
                    <h2 id="title">HOW MUCH DO YOU KNOW ABOUT BATMAN UNIVERSE?</h2>
                    <h4>TAKE THE QUIZ!</h4>

                    <p>It has {TotalQuestions} questions!</p>

                    <QuizQuestions ActualPosition={Position} Question={Question} WrongAnswers={WrongAnswers} RightAnswer={RightAnswer} onTrigger={this.state.onTrigger}></QuizQuestions>

                    <button id="NextCuestion" onClick={this.NextQuestion}> Next Question</button>

                </div>

            </div>

        );
    }



}



export default QuizBody;