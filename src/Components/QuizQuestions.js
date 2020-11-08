import React, {Component} from 'react';





class QuizQuestions extends Component{

    constructor(props){

     const RandomRight = Math.random();

        
        super(props);

        this.state = {
            RightAnswer: this.props.RightAnswer,
           WrongAnswers:  this.props.WrongAnswers,
           RandomNumberForRight: RandomRight,
        }
        
    }



    UNSAFE_componentWillReceiveProps(nextProps){

        this.setState({RightAnswer: nextProps.RightAnswer})
        this.setState({WrongAnswers: nextProps.WrongAnswers})
        

    }
 

    componentDidMount(){    
        let Append = document.getElementById("Answers");
        Object.values(this.state.WrongAnswers[0]).forEach(function(element, index){ 
            let NameInput = 'Answer';
            let newInput = document.createElement("input");
            newInput.setAttribute("type", "radio");
            newInput.setAttribute("name", NameInput);
            newInput.setAttribute("value", Math.random());
            let newLabel = document.createElement("label");
            newLabel.setAttribute("htmlFor", NameInput);
            newLabel.innerHTML = element;
           Append.append(newInput, newLabel);

           
            
        })

   
    }



  
 
componentDidUpdate(prevProps) {

console.log(this.state, "nuevoestado");

}

componentWillUpdate(){

}        


    render(){

        return(

    

        <div id="QuizQuestion">
            <h2>Question number {this.props.ActualPosition}</h2>

            <p>{this.props.Question}</p>

            <form id="Answers">
                <input  name="Answer" type="radio" value={this.state.RandomNumberForRight}></input>
                <label htmlFor="Answer">{this.state.RightAnswer}</label>
            </form>     
           
         </div>
            
        )

    }


}

export default QuizQuestions;