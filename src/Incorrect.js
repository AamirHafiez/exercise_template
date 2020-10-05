import React from 'react';
import Footer from './Footer';

class Incorrect extends React.Component{

    render() {
        return(
            <div className="incorrect-container cor-incor-container">
                <div className="correct-head">
                    <div>
                        <img className="correct-icon" src="https://www.flaticon.com/svg/static/icons/svg/929/929416.svg" alt="correct"/>
                        <p className="incorrect-p">Oops! That's incorrect</p>
                    </div>
                    <button className="continue-btn">Continue</button>
                </div>
                
                <Footer col="red"/>
            </div>
        );
    }
}

export default Incorrect;