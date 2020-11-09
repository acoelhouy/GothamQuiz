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


    ChangeInputs = function(ActualProps){

        console.log(this.props, "props");

        let Append = document.getElementById("Answers");

        //Empty the div if the user already clicks on Next Question

        if(this.props.ActualPosition > 1){

           document.getElementById("Answers").innerHTML = "";

           //Custom radio. First create all elements except label which is the container 
            let newInputRight = document.createElement("input");
            newInputRight.setAttribute("type", "radio");
            newInputRight.setAttribute("name", "Answer");
            newInputRight.setAttribute("value", this.state.RandomNumberForRight);

            let newCheckMark = document.createElement("span");
            newCheckMark.setAttribute("class", "checkmark");
            let newLabelRight = document.createElement("label");
            
           
            let LabelInfo = document.createElement("P");
            LabelInfo.innerText = this.props.RightAnswer;
            //Append all as child for the label 
            newLabelRight.appendChild(newInputRight);
            newLabelRight.appendChild(newCheckMark);
            newLabelRight.appendChild(LabelInfo);

            //Append all to the DOM
            newLabelRight.setAttribute("htmlFor", newInputRight.getAttribute("name"));
            newLabelRight.setAttribute("class", "radio-container");
            setTimeout(() => {
                newLabelRight.classList.add("radio-container-showed"); 
            }, 1000);
            document.getElementById("Answers").append(newLabelRight);

            //Bring the others one (which are all wrongs answers)

            //TO DO: reorder the inputs on every rerender 

            Object.values(ActualProps).forEach(function(element, index){ 
                let newInput = document.createElement("input");
                newInput.setAttribute("type", "radio");
                newInput.setAttribute("name", "Answer");
                newInput.setAttribute("value", Math.random());

                let IndexPlusTimeOut = index*50;

                let newCheckMark = document.createElement("span");
                newCheckMark.setAttribute("class", "checkmark");

                let newLabel = document.createElement("label");
                let LabelInfo = document.createElement("P");
                LabelInfo.innerText = element;
                //Append all as child for the label 
                newLabel.appendChild(newInput);
                newLabel.appendChild(newCheckMark);
                newLabel.appendChild(LabelInfo);

                newLabel.setAttribute("htmlFor", newInput.getAttribute("name"));
                newLabel.setAttribute("class", "radio-container");
                setTimeout(() => {
                    newLabel.classList.add("radio-container-showed"); 
                }, 1000+IndexPlusTimeOut);

               Append.append(newLabel);
            })
        }else{
        
            //Custom radio. First create all elements except label which is the container 
            let newInputRight = document.createElement("input");
            newInputRight.setAttribute("type", "radio");
            newInputRight.setAttribute("name", "Answer");
            newInputRight.setAttribute("value", this.state.RandomNumberForRight);

            let newCheckMark = document.createElement("span");
            newCheckMark.setAttribute("class", "checkmark");
            let newLabelRight = document.createElement("label");

            let LabelInfo = document.createElement("P");
            LabelInfo.innerText = this.props.RightAnswer;
            //Append all as child for the label 
            newLabelRight.appendChild(newInputRight);
            newLabelRight.appendChild(newCheckMark);
            newLabelRight.appendChild(LabelInfo);

            //Append all to the DOM
            newLabelRight.setAttribute("htmlFor", newInputRight.getAttribute("name"));
            newLabelRight.setAttribute("class", "radio-container");
            setTimeout(() => {
                newLabelRight.classList.add("radio-container-showed"); 
            }, 1000);
            document.getElementById("Answers").append(newLabelRight);
        
    
            Object.values(ActualProps).forEach(function(element, index){ 
                let newInput = document.createElement("input");
                newInput.setAttribute("type", "radio");
                newInput.setAttribute("name", "Answer");
                newInput.setAttribute("value", Math.random());

                let IndexPlusTimeOut = index*50;

                let newCheckMark = document.createElement("span");
                newCheckMark.setAttribute("class", "checkmark");

                let newLabel = document.createElement("label");

                let LabelInfo = document.createElement("P");
                LabelInfo.innerText = element;
                //Append all as child for the label 
                newLabel.appendChild(newInput);
                newLabel.appendChild(newCheckMark);
                newLabel.appendChild(LabelInfo);

                newLabel.setAttribute("htmlFor", newInput.getAttribute("name"));
                newLabel.setAttribute("class", "radio-container");
                setTimeout(() => {
                    newLabel.classList.add("radio-container-showed"); 
                }, 1000+IndexPlusTimeOut);
              
               Append.append(newLabel);
            })
        }    
    }



    UNSAFE_componentWillReceiveProps(nextProps){

        this.setState({RightAnswer: nextProps.RightAnswer})
        this.setState({WrongAnswers: nextProps.WrongAnswers})

      
        

    }
 

    componentDidMount(){    
      
       // this.ChangeInputs(this.state.WrongAnswers[0], false);
   
    }



  
 
componentDidUpdate(prevProps) {

        this.ChangeInputs(this.state.WrongAnswers[0]);

}

componentWillUpdate(){

}        


    render(){

        return(

    

        <div id="QuizQuestion">
            <h2>Question number {this.props.ActualPosition}</h2>

            <p>{this.props.Question}</p>

            <form id="Answers">

            </form>     
           
         </div>
            
        )

    }


}

export default QuizQuestions;