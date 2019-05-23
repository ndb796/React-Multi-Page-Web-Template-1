import React from 'react';
import './Board.css';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false
        };
    }
    hover = () => {
        this.setState({ hover: true })
    }
    leave = () => {
        this.setState({ hover: false })
    }
    render() {
        return (
            <div className="container">
                <div className="box">
                    <div
                        onMouseEnter={this.hover}
                        onMouseLeave={this.leave}
                        className={this.state.hover ? "content hover" : "content"}>
                        {this.props.title}
                    </div>
                </div>
            </div>
        );
    }
}

export default Board;