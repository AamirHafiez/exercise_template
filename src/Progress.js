import React from 'react';

class Progress extends React.Component{
    constructor(){
        super();
        this.state = {
            done: 6,
            total: 10
        }
    }

    render() {

        let percentage = (this.state.done * 100) / this.state.total;
        
        return(
            <div>
                <div className="progress-container">
                    <div style={{width: percentage+ "%"}} className="progress-done"></div>
                    <p className="progress-numerics"> {percentage}%</p>
                </div>
            </div>
        );
    }
}

export default Progress;