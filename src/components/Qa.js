import React from 'react';

import './Qa.css';

class Qa extends React.Component {
    render() {
        return (
            <div className="qa">
                <div className="text">
                    질문: {this.props.question}<br/>
                    답변: {this.props.answer}
                </div>
            </div>
        );
    }
}

export default Qa;