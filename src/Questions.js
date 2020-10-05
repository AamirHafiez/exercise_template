import React from 'react';
import Correct from './Correct';
import Incorrect from './Incorrect';

class Questions extends React.Component{
    constructor(){
        super();
        this.state = {
            question: "Sample Question",
            isCorrect: "false"
        }
    }
    
    render() {
        return(
            <div>
                <div className="question-container">
                    <header>
                        <h1>Question</h1>
                    </header>
                    <div className="Question">
                        <p>Q: {this.state.question}</p>
                        <p>Options</p>
                    </div>
                </div>
                {this.state.isCorrect === "true" && <Correct/>}
                {this.state.isCorrect === "false" && <Incorrect/>}
            </div>
        );
    }
}

export default Questions;