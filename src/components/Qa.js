import React from 'react';

import './Qa.css';
import arrowIcon from '../icons/arrow_down.png';

class Qa extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
    }
    toggle = () => {
        const currentState = this.state.active;
        this.setState({ active: !currentState })
    }
    render() {
        return (
            <div className="qa">
                <div className="text">
                    <div className="question">
                        질문: {this.props.question}
                        <div className="icon">
                            <img src={arrowIcon} onClick={this.toggle} alt="arrowIcon"/>
                        </div>
                    </div>
                    <div
                        className={this.state.active ? 'answer' : 'hide'}>
                        답변: {this.props.answer}
                    </div>
                </div>
            </div>
        );
    }
}

export default Qa;