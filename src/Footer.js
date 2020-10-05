import React from 'react';

class Footer extends React.Component{
    render() {
        return(
            <div className="flexIt footer-container">
                <div className="footer-element flexIt" style={{color: this.props.col}}>
                    <i class="fa fa-flag-o" aria-hidden="true"></i>                    
                    <p >Report</p>
                </div>
                <div className="footer-element flexIt" style={{color: this.props.col}}>
                    <i class="fa fa-search" aria-hidden="true"></i>
                    <p>Discuss</p>
                </div>
                <div className="footer-element flexIt" style={{color: this.props.col}}>
                    <i class="fa fa-file" aria-hidden="true"></i>
                    <p>Explaination</p>
                </div>  
            </div>
        );
    }
}

export default Footer;