import React from 'react';
import Footer from './Footer';

class Correct extends React.Component{

    render() {
        return(
            <div className="correct-container cor-incor-container">
                <div className="correct-head">
                    <div>
                        <img className="correct-icon" src="https://www.flaticon.com/svg/static/icons/svg/845/845646.svg" alt="correct"/>
                        <p className="correct-p">Well Done! You are Correct</p>
                    </div>
                    <button className="continue-btn">Continue</button>
                </div>
                
                <Footer col="green"/>
            </div>
        );
    }
}

export default Correct;